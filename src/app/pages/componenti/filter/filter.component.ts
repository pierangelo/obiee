import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    $(function() {
      var ds = {
        name: "Lao Lao",
        title: "general manager",
        children: [
          { name: "Bo Miao", title: "department manager" },
          {
            name: "Su Miao",
            title: "department manager",
            children: [
              { name: "Tie Hua", title: "senior engineer" },
              {
                name: "Hei Hei",
                title: "senior engineer",
                children: [
                  { name: "Pang Pang", title: "engineer" },
                  {
                    name: "Xiang Xiang",
                    title: "UE engineer",
                    children: [
                      { name: "Dan Dan", title: "engineer" },
                      {
                        name: "Er Dan",
                        title: "engineer",
                        children: [
                          { name: "Xuan Xuan", title: "intern" },
                          { name: "Er Xuan", title: "intern" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          { name: "Hong Miao", title: "department manager" },
          {
            name: "Chun Miao",
            title: "department manager",
            children: [
              { name: "Bing Qin", title: "senior engineer" },
              {
                name: "Yue Yue",
                title: "senior engineer",
                children: [
                  { name: "Er Yue", title: "engineer" },
                  { name: "San Yue", title: "UE engineer" }
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
        visibleLevel: 4,
        exportButton: false
      });

      $("#chart-container")
        .find(".node")
        .on("click", function() {
          //alert(JSON.stringify($(this).data("nodeData")));
          console.log(JSON.stringify($(this).data("nodeData")));
        });
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
