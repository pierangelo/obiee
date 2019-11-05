import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { fadeInOutAnimation } from "./controller/animation.controller";

declare var $;
@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeInOutAnimation]
})
export class AppComponent {
  @ViewChild("global-spinner", { static: true }) spinner;

  name = "Angular";

  onResize(event) {}

  constructor(router: Router, private myElement: ElementRef) {
    const appRootRef = this.myElement; // Necesarry because after setTimeout, 'this' becomes window
    //landing page...
    router.navigate(["/"]);
    //appRootRef.nativeElement.previousElementSibling.remove();
    //low level code :)

    $("#global-spinner").fadeOut("", () => {
      $("#global-spinner").remove();
    });
  }
}
