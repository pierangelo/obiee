import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ApplicationModelService } from './../../service/application-model.service';

declare var $;
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public baseUrl: string = "";
  private hostname: string = "";
  constructor(private router: Router, public applicationModel: ApplicationModelService) {
  }
  ngOnInit() {

    //initi ajax
    $.ajax({
      method: "GET",
      url: "analytics/saw.dll?Go",
      data: {
        path: "/shared/prove/Dashboard-Test/source_anno",
        Format: "xml",
        Options: "f",
        Action: "print",
        p0: 1,
        p1: "eq",
        p2: '"Tempo"."Anno"',
        p3: "2018"
      },
      success: function (data) {
        console.log(data);


      }
    }
    );
    //fin ajax


  }
}
