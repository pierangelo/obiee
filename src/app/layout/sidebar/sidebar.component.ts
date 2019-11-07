import { FormControl } from "@angular/forms";
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from "@angular/cdk/layout";

import { environment } from "../../../enviroments/environment.";
import { ViewChild, Component, OnInit, Renderer2 } from "@angular/core";
import { findLast } from "@angular/compiler/src/directive_resolver";

declare var $;
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @ViewChild("menu-sin", { static: true }) menu;

  //mode:"over","side","push"
  mode = new FormControl("side");
  version: any;
  name: any;
  @ViewChild("sidenav", { static: true }) sidebar;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private renderer: Renderer2
  ) {
    this.version = environment.version;
    this.name = environment.name;
  }

  ngOnInit() {
    //menu open
    this.sidebar.open();

    //responsive
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.HandsetPortrait
      ])
      .subscribe((state: BreakpointState) => {
        console.log(state);
        if (state.matches) {
          console.log("sidebar: push!");
          this.mode = new FormControl("push");
          this.sidebar.close();
        } else {
          console.log("sidebar: side!");
          this.mode = new FormControl("side");
          this.sidebar.open();
        }
      });
  }

  clickMenu(event: MouseEvent) {
    console.log(event.currentTarget);

    // low level code
    if ($(event.currentTarget).hasClass("disabled")) {
      console.log("disabled");

      return;
    }

    $(".menu-sin")
      .find("a")
      .removeClass("active");
    $(event.currentTarget).addClass("active");
  }
}
