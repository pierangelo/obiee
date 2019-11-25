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

    "2017",
    "2018",
    "2019"

  ];
  checkedAnalisiPuntuale: any;
  tempAnnoValue: any;
  uot: any;
  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public eventDispatcher: EventDispatcherService,
    public applicationModel: ApplicationModelService
  ) { }

  onChange(event) {
    console.log(event);
    this.checkedAnalisiPuntuale = !this.checkedAnalisiPuntuale;
  }
  onSaveClick(event): void {
    this.applicationModel.resetUotInfo();
    console.log("close...");
    this.tempAnnoValue
      ? (this.applicationModel.anno = this.tempAnnoValue)
      : null;
    this.uot ? (this.applicationModel.uot = this.uot) : null;

    this.checkedAnalisiPuntuale
      ? (this.applicationModel.checkedAnalisiPuntuale = "PUNTUALE")
      : (this.applicationModel.checkedAnalisiPuntuale = "CONO");

    this.eventDispatcher.dispatchEvent(
      new ApplicationEvent(ApplicationEvent.FILTER_HEADER_SEND)
    );
  }

  onNoClick(event): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    $(() => {
      var ds = {
        name: "ENAV S.P.A.",
        title: "Società",
        children: [
          {
            name: "A.D.",
            title: "Area",
            children: [
              {
                name: "OPERATIONS",
                title: "Area",
                children: [
                  {
                    name: "OP.CENTER-SOUTH",
                    title: "Funzione",
                    children: [
                      { name: "BRINDISI", title: "Funzione" },
                      {
                        name: "ACC BRINDISI",
                        title: "Funzione",

                        children: [
                          {
                            name: "SUPPORT OFFICE",
                            title: "Settore"
                          },
                          {
                            name: "SAFETY",
                            title: "Settore"
                          },
                          {
                            name: "TRAINING",
                            title: "Settore"
                          },
                          {
                            name: "OPERATIONS",
                            title: "Settore"
                          },
                          {
                            name: "ROSTERING",
                            title: "Settore"
                          },
                          {
                            name: "AUTOMATION",
                            title: "Settore"
                          }
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
        verticalLevel: 7,
        visibleLevel: 5,
        //exportButton: false,
        //direction: "t2b",
        direction: "l2r",
        depth: 2,
        pan: true,
        zoom: true
      });

      $("#chart-container")
        .find(".node")
        .on("click", event => {
          console.log(event);
          console.log(JSON.stringify($(event.currentTarget).data("nodeData")));

          this.uot = $(event.currentTarget).data("nodeData").name;

          if (this.uot === 'OP.CENTER-SOUTH') {
            this.uot = "OPERATIONS CENTER AND SOUTH";
          }
          console.log(this.uot);
        });
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
