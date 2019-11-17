import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./../componenti/dialog/dialog.component";
import { EchartsModel } from "./../../utils/echarts.model";
import { EchartsController } from "src/app/controller/echarts.controller";
import { DettaglioService } from "./../../service/dettaglio.service";
import { EventDispatcherService } from "./../../service/event-dispatcher.service";

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
  constructor(
    public dialog: MatDialog,
    public dettaglioService: DettaglioService,
    public eventDispatcher: EventDispatcherService
  ) {
    console.log("created listener...");
    eventDispatcher.broadcastListener.subscribe((event: any) => {
      console.log(event);
      this.resetData();
      this.loadData();
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

  private optionInstoCategoria;
  private optionInstoPerQualifica;
  private optionInstoPerTipoImpiego;
  private optionAndamentoAnnualeOrganico;
  ngOnInit() {
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
    this.optionInstoPerQualifica = EchartsModel.optionDettaglioIstoCategoria();
    this.optionInstoPerTipoImpiego = EchartsModel.optionDettaglioIstoCategoria();
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
    EchartsController.echartsLoadingShow(this.chartIstoCategoria);
    this.dettaglioService.getDipendentiPerCategoria().subscribe(
      (data: any) => {
        console.log(data);

        this.optionInstoCategoria.series[0].data = data[0].data;
        EchartsController.refreshEcharts(
          this.chartIstoCategoria,
          this.optionInstoCategoria
        );
      },
      error => {
        console.error(error);
      }
    );

    EchartsController.echartsLoadingShow(this.chartIstoQualifica);
    this.dettaglioService.getDipendentiPerQualifica().subscribe(
      (data: any) => {
        this.optionInstoPerQualifica.series[0].itemStyle.color = "#5fe693";
        this.optionInstoPerQualifica.series[0].data = [10, 2, 16, 9];
        EchartsController.refreshEcharts(
          this.chartIstoQualifica,
          this.optionInstoPerQualifica
        );
      },
      error => {
        console.error(error);
      }
    );

    EchartsController.echartsLoadingShow(this.chartIstoDip);
    this.dettaglioService.getDipendentiPerTipoImpiego().subscribe(
      (data: any) => {
        this.optionInstoPerTipoImpiego.series[0].itemStyle.color = "#f2b53f";
        this.optionInstoPerTipoImpiego.series[0].data = [3, 22, 7, 14];
        EchartsController.refreshEcharts(
          this.chartIstoDip,
          this.optionInstoPerTipoImpiego
        );
      },
      error => {
        console.error(error);
      }
    );

    EchartsController.echartsLoadingShow(this.chartAnnuale);
    this.dettaglioService.getAndamentoAnnualeOrganico().subscribe(
      (data: any) => {
        this.optionAndamentoAnnualeOrganico.series[0].data = data[0].data;
        this.optionAndamentoAnnualeOrganico.series[1].data = data[1].data;
        EchartsController.refreshEcharts(
          this.chartAnnuale,
          this.optionAndamentoAnnualeOrganico
        );
      },
      error => {
        console.error(error);
      }
    );
  }

  resetData() {
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
