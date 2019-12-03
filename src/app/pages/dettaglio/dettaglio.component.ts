import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./../componenti/dialog/dialog.component";
import { EchartsModel } from "./../../utils/echarts.model";
import { EchartsController } from "src/app/controller/echarts.controller";
import { DettaglioService } from "./../../service/dettaglio.service";
import { EventDispatcherService } from "./../../service/event-dispatcher.service";
import { ApplicationModelService } from "./../../service/application-model.service";
import { ApplicationEvent } from 'src/app/utils/application-event';

declare var echarts;

declare var $;
@Component({
  selector: "app-dettaglio",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.scss"]
})
export class DettaglioComponent implements OnInit {
  chartIstoCategoria: any;
  chartIstoQualifica: any;
  chartIstoDip: any;
  chartAnnuale: any;
  private optionInstoCategoria;
  private optionInstoPerQualifica;
  private optionInstoPerTipoImpiego;
  private optionAndamentoAnnualeOrganico;

  constructor(
    public dialog: MatDialog,
    public dettaglioService: DettaglioService,
    public eventDispatcher: EventDispatcherService,
    public applicationModel: ApplicationModelService
  ) {
    console.log("created listener...");
    eventDispatcher.broadcastListener.subscribe((event: any) => {
      console.log(event);


      if (event.message == ApplicationEvent.FILTER_HEADER_SEND) {
        this.resetData();
        this.loadData();
      }

    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  ngOnInit() {
    this.applicationModel.filtriVisibili = true;
    $(".filter-element").show();
    //echarts
    let option;


    this.chartIstoCategoria = echarts.init(
      document.getElementById("istoCategoria")
    );
    this.chartIstoQualifica = echarts.init(
      document.getElementById("istoQualifica")
    );
    this.chartIstoDip = echarts.init(document.getElementById("istoDip"));
    this.chartAnnuale = echarts.init(document.getElementById("istoAnnuale"));

    this.optionInstoCategoria = EchartsModel.optionDettaglioIstoCategoria();
    this.optionInstoCategoria.series[0].tooltip = {
      formatter: function (d) {
        return d.name + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #5fd3e6"></span>' + d.value.toLocaleString("it-IT");
      },
    };
    this.optionInstoPerQualifica = EchartsModel.optionDettaglioIstoCategoria();
    this.optionInstoPerQualifica.series[0].itemStyle.color = "#5fe693";
    this.optionInstoPerQualifica.series[0].tooltip = {
      formatter: function (d) {
        return d.name + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #5fe693"></span>' + d.value.toLocaleString("it-IT");
      },
    };
    this.optionInstoPerTipoImpiego = EchartsModel.optionDettaglioIstoCategoria();
    this.optionInstoPerTipoImpiego.series[0].itemStyle.color = "#f2b53f";
    this.optionInstoPerTipoImpiego.series[0].tooltip = {
      formatter: function (d) {
        return d.name + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color: #f2b53f"></span>' + d.value.toLocaleString("it-IT");
      },
    };
    this.optionAndamentoAnnualeOrganico = EchartsModel.optionDettaglioAndamentoAnnualeOrganico();

    this.loadData();

    $(window).on("resize", () => {
      console.log("resize");
      this.chartIstoCategoria.resize();
      this.chartIstoQualifica.resize();
      this.chartIstoDip.resize();
      this.chartAnnuale.resize();
    });
  }

  private loadData() {

    this.dettaglioService.getUotInfo();

    this.dettaglioService.getDipendentiPerCategoria(this.chartIstoCategoria, this.optionInstoCategoria);


    this.dettaglioService.getDipendentiPerQualifica(this.chartIstoQualifica, this.optionInstoPerQualifica);


    this.dettaglioService.getDipendentiPerTipoImpiego(this.chartIstoDip, this.optionInstoPerTipoImpiego);


    EchartsController.echartsLoadingShow(this.chartAnnuale);
    this.dettaglioService.getAndamentoAnnualeOrganico().subscribe(
      (data: any) => {
        this.optionAndamentoAnnualeOrganico.series[0].data = data[0].data;
        this.optionAndamentoAnnualeOrganico.series[1].data = data[1].data;
        EchartsController.refreshEcharts(this.chartAnnuale, this.optionAndamentoAnnualeOrganico);
      },
      error => {
        console.error(error);
      }
    );

  }

  private resetData() {
    this.optionInstoPerTipoImpiego.series[0].data = [];
    this.chartIstoDip.setOption(this.optionInstoPerTipoImpiego);

    this.optionInstoCategoria.series[0].data = [];
    this.chartIstoCategoria.setOption(this.optionInstoCategoria);

    this.optionInstoPerQualifica.series[0].data = [];
    this.chartIstoQualifica.setOption(this.optionInstoPerQualifica);

    this.optionAndamentoAnnualeOrganico.series[0].data = [];
    this.optionAndamentoAnnualeOrganico.series[1].data = [];
    this.chartAnnuale.setOption(this.optionAndamentoAnnualeOrganico);
  }
}
