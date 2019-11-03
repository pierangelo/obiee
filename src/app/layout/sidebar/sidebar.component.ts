import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  //mode:"over","side","push"
  mode = new FormControl("side");

  @ViewChild("sidenav", { static: true }) input;

  ngOnInit() {
    this.input.open();
  }
}
