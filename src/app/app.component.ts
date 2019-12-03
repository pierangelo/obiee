import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { fadeInOutAnimation } from "./controller/animation.controller";
import { ViewportScroller } from "@angular/common";
import { ModalController } from './controller/ModalController';

declare var $;
@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeInOutAnimation],

})
export class AppComponent {
  @ViewChild("global-spinner", { static: true }) spinner;

  name = "Angular";

  onResize(event) { }

  constructor(
    public router: Router, private myElement: ElementRef, public viewportScroller: ViewportScroller) {


    const appRootRef = this.myElement;
    //landing page...
    router.navigate(["/home"]);
    //appRootRef.nativeElement.previousElementSibling.remove();

    //low level code :)
    setTimeout(function () {
      $("#global-spinner").fadeOut("", () => {
        $("#global-spinner").remove();
      });
    }, 2000);
  } //constructor

  ngOnInit() {
    $(".filter-element").hide();
    //trick
    this.router.events.subscribe(evt => {
      $('.container-reponsive').fadeIn("slow");
      $(".mat-sidenav-content").scrollTop(0);
    });
  }
}
