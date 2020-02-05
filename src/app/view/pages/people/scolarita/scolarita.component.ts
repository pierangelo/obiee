import { EchartsModel } from "./../../../../model/echarts.model";
import { ApplicationModelService } from "./../../../../model/application-model";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../../../componenti/dialog/dialog.component";
import { PeopleService } from "./../people.service";

declare var echarts;
declare var $;

@Component({
  selector: "scolarita",
  templateUrl: "./scolarita.component.html",
  styleUrls: ["./scolarita.component.scss"]
})
export class ScolaritaComponent implements OnInit, AfterViewInit {
  private chartScolarita;
  private optionScolarita;
  constructor(
    private dialog: MatDialog,
    private applicationModel: ApplicationModelService,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    //scolarita
    this.chartScolarita = echarts.init(
      document.getElementById("scolarita-chart")
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "850px",
      data: {
        message: this.applicationModel.messageGeneric,
        titolo: "Informazione"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  } //opendialog

  ngAfterViewInit() {
    this.optionScolarita = EchartsModel.optionPeopleRappresentantiSindacati();
    this.optionScolarita.series[0].name = "Scolarità";
    this.optionScolarita.series[0].tooltip = {
      formatter: function(d) {
        return (
          d.name +
          '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #26a0fc"></span>' +
          d.value.toLocaleString("it-IT")
        );
      }
    };
    this.peopleService.getScolarita(this.chartScolarita, this.optionScolarita);
  } //afterViewInit
}
