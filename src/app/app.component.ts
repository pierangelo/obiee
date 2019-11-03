import { Component } from "@angular/core";
import { Router } from "@angular/router";

declare var $;
@Component({
  selector: "app-main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular";

  onResize(event) {}

  constructor(router: Router) {
    //landing page...
    router.navigate(["/"]);

    //low level code :)
    $("#fs-global-spinner").fadeOut("", () => {
      $("#fs-global-spinner").remove();
    });
  }
}
