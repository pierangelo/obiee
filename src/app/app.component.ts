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
    router.navigate(["/home"]);
    //appRootRef.nativeElement.previousElementSibling.remove();

    //low level code :)
    setTimeout(function() {
      $("#global-spinner").fadeOut("", () => {
        $("#global-spinner").remove();
      });
    }, 2000);
  }
}
