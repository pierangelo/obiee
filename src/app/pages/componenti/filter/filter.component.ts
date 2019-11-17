import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { EventDispatcherService } from "./../../../service/event-dispatcher.service";
import { ApplicationEvent } from "./../../../utils/application-event";
import { ApplicationModelService } from "src/app/service/application-model.service";

declare var $;

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  anni: any = [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2019",
    "2020"
  ];

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public eventDispatcher: EventDispatcherService,
    public applicationModel: ApplicationModelService
  ) {}

  tempValue: any;

  onSaveClick(event): void {
    console.log("close...");
    this.applicationModel.anno = this.tempValue;
    this.eventDispatcher.dispatchEvent(new ApplicationEvent());
  }

  onNoClick(event): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    $(function() {
      var ds = {
        name: "ENAV S.P.A.",
        title: "general manager",
        children: [
          { name: "FTerritoriale1", title: "department manager" },
          { name: "FTerritoriale0", title: "department manager" },
          {
            name: "FTerritoriale2",
            title: "department manager",
            children: [
              { name: "FTerritoriale3", title: "senior engineer" },
              {
                name: "FTerritoriale",
                title: "senior engineer",
                children: [
                  { name: "FTerritoriale5", title: "engineer" },
                  {
                    name: "FTerritoriale6",
                    title: "UE engineer",
                    children: [
                      { name: "FTerritoriale7", title: "engineer" },
                      {
                        name: "FTerritoriale8",
                        title: "engineer",
                        children: [
                          { name: "FTerritoriale9", title: "intern" },
                          { name: "FTerritoriale10", title: "intern" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };

      var oc = $("#chart-container").orgchart({
        data: ds,
        nodeContent: "title",
        verticalLevel: 3,
        visibleLevel: 3,
        exportButton: false,
        direction: "l2r",
        pan: true,
        zoom: true
      });

      $("#chart-container")
        .find(".node")
        .on("click", function() {
          //alert(JSON.stringify($(this).data("nodeData")));
          console.log(JSON.stringify($(this).data("nodeData")));
        });
      $(".orgchart").css("background", "#fff");
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
