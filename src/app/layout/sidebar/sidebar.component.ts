import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints
} from "@angular/cdk/layout";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  //mode:"over","side","push"
  mode = new FormControl("side");

  @ViewChild("sidenav", { static: true }) sidebar;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.sidebar.open();
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log("Matches small viewport or handset in portrait mode");
          this.mode = new FormControl("push");
          this.sidebar.close();
        }
      });

    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          console.log("Matches small viewport or handset in portrait mode");
          this.mode = new FormControl("side");
          this.sidebar.open();
        }
      });
  }
}
