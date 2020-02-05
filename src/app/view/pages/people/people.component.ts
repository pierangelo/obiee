import { ApplicationEvent } from "./../../../utils/application-event";
import { EventDispatcherService } from "./../../../service/event-dispatcher.service";
import { ApplicationModelService } from "./../../../model/application-model";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { EchartsController } from "src/app/delegate/echarts.controller";
import { PeopleService } from "./people.service";
import { EchartsModel } from "src/app/model/echarts.model";
import { empty } from "rxjs";
import { DialogComponent } from "../../componenti/dialog/dialog.component";

declare var echarts;
declare var $;
@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  mode = new FormControl("over");
  name = "";
  option: any;
  option2: any;
  optionRappresentati: any;
  optionScolatirita: any;
  chartScolarita: any;
  myChart: any;
  histoMashiFemmine: any;
  optionPictiorialChart: any;
  chartRappresentantiSindacali: any;

  pictiorialChart: any;
  myVar = {};

  constructor(
    public dialog: MatDialog,
    public peopleService: PeopleService,
    public applicationModel: ApplicationModelService,
    public eventDispatcher: EventDispatcherService
  ) {
    this.myVar = {
      groups: [
        {
          name: "Donne",
          value: applicationModel.totaleDonneGenere,
          total: applicationModel.totaleDonneGenere + "%"
        },
        {
          name: "Uomini",
          value: applicationModel.totaleUominiGenere,
          total: applicationModel.totaleUominiGenere + "%"
        }
      ]
    };
    eventDispatcher.broadcastListener.subscribe((event: ApplicationEvent) => {
      console.log(event);

      if (event.message == ApplicationEvent.FILTER_HEADER_SEND) {
        this.resetData();
        this.loadData();
      }
    });
  }

  ngOnInit() {
    this.applicationModel.filtriVisibili = false;
    $(".filter-element").hide();
  } // ngOninit

  ngAfterViewInit() {
    //dipendenti forza
    this.myChart = echarts.init(document.getElementById("pie-chart"));
    console.log(this.myChart);

    //iscritti sindacati : secondo chart
    this.histoMashiFemmine = echarts.init(
      document.getElementById("histoMashiFemmine")
    );

    //rappesentanti
    this.chartRappresentantiSindacali = echarts.init(
      document.getElementById("rapp-sind-chart")
    );

    this.pictiorialChart = echarts.init(
      document.getElementById("pictiorialChart")
    );

    //hanlder
    $(window).on("resize", () => {
      console.log("resize");
      this.myChart.resize();
      this.histoMashiFemmine.resize();
      this.chartRappresentantiSindacali.resize();
      this.chartScolarita.resize();
      this.pictiorialChart.resize();
    });

    if (
      this.applicationModel.uot == "ENAV S.P.A." ||
      this.applicationModel.uot === "BRINDISI" ||
      this.applicationModel.uot === "ACC BRINDISI"
    ) {
      this.loadData();
    }
  } //ngAfterViewInit

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
  }

  private loadData() {
    this.peopleService.getUotInfo();

    this.option2 = EchartsModel.optionPeopleDipendentiInForza();
    this.peopleService.getDipendentiInForza(
      this.histoMashiFemmine,
      this.option2
    );

    this.peopleService.getAnzianita();

    this.option = EchartsModel.optionPeopleRappresentantiSindacati();
    this.option.series[0].itemStyle.color = "#f2b53f";
    this.option.series[0].tooltip = {
      formatter: function(d) {
        return (
          d.name +
          '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #f2b53f"></span>' +
          d.value.toLocaleString("it-IT")
        );
      }
    };
    this.peopleService.getSindacati(this.myChart, this.option);

    this.optionRappresentati = EchartsModel.optionPeopleRappresentantiSindacati();
    this.optionRappresentati.series[0].itemStyle.color = "#5fe693";
    (this.optionRappresentati.series[0].tooltip = {
      formatter: function(d) {
        return (
          d.name +
          '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #5fe693"></span>' +
          d.value.toLocaleString("it-IT")
        );
      }
    }),
      this.peopleService.getRappresentantiSindacati(
        this.chartRappresentantiSindacali,
        this.optionRappresentati
      );

    //carica cio che deve caricare per il grafico

    this.optionPictiorialChart = EchartsModel.optionPictiorialChart();
    //this.pictiorialChart.setOption(this.optionPictiorialChart);
    //this.peopleService.getPictionarBar(this.pictiorialChart, this.optionPictiorialChart);

    this.peopleService.getDipendentiGenere(
      this.pictiorialChart,
      this.optionPictiorialChart
    );

    //secondo grafico
    var svg = $("#svganchor").empty();
    //this.drawGraficoUominiDonne(this.myVar);
  }

  ////////////////////////////////////////////////////
  //
  // private methods
  //
  ////////////////////////////////////////////////////
  private resetData() {
    this.option.series[0].data = [];
    this.myChart.setOption(this.option);
    this.option2.series[0].data = [];
    this.option2.series[1].data = [];
    this.histoMashiFemmine.setOption(this.option2);

    this.optionScolatirita.series[0].data = [];
    this.chartScolarita.setOption(this.optionScolatirita);

    this.optionPictiorialChart.series[0].data = [];
    this.pictiorialChart.setOption(this.optionPictiorialChart);
  }
}
