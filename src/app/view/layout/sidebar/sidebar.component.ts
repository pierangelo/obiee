import { FormControl } from "@angular/forms";
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from "@angular/cdk/layout";

import { environment } from "../../../../enviroments/environment.";
import { ViewChild, Component, OnInit, Renderer2 } from "@angular/core";
import { findLast } from "@angular/compiler/src/directive_resolver";
import { RouterOutlet } from "@angular/router";
import { ApplicationModelService } from "../../../model/application-model";

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
  isMobile: any;
  @ViewChild("sidenav", { static: true }) sidebar;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    public applicationModel: ApplicationModelService
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
          this.isMobile = true;
          console.log("sidebar: push!");
          this.mode = new FormControl("push");
          this.sidebar.close();
        } else {
          this.isMobile = false;
          console.log("sidebar: side!");
          this.mode = new FormControl("side");
          this.sidebar.open();
        }
      });
  }

  prepare(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["routeAnimations"]
    );
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

    //mobile check for sidebar behaviuor
    this.isMobile ? this.sidebar.close() : "";
  }
}
