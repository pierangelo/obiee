import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { fadeInOutAnimation } from "./controller/animation.controller";
import { ViewportScroller } from "@angular/common";
import { ModalController } from './controller/ModalController';
import { ApplicationModelService } from './service/application-model.service';

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
  hostname: String = "";
  onResize(event) { }

  constructor(
    public router: Router, private myElement: ElementRef, public viewportScroller: ViewportScroller, public applicationModel: ApplicationModelService) {


    const appRootRef = this.myElement;

    //chech local or remote...

    this.hostname = window.location.href;

    if (this.hostname.includes("oraclecloud.com")) {
      this.applicationModel.baseUrl = "analytics/saw.dll?downloadFile&Path=/shared/custom/js/assets/"
    } else {
      this.applicationModel.baseUrl = "../../../assets/";
    }
    console.log("baseUrl: " + this.applicationModel.baseUrl);
    //landing page...
    router.navigate(["/home"]);

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
