import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DettaglioService } from './../../service/dettaglio.service';
import { EventDispatcherService } from './../../service/event-dispatcher.service';
import { ApplicationModelService } from 'src/app/service/application-model.service';
import { DialogComponent } from './../componenti/dialog/dialog.component';
import { EchartsModel } from 'src/app/utils/echarts.model';
import { EchartsController } from './../../controller/echarts.controller';


declare var $;
declare var echarts;

@Component({
  selector: 'app-dettaglio-anzianita',
  templateUrl: './dettaglio-anzianita.component.html',
  styleUrls: ['./dettaglio-anzianita.component.scss']
})
export class DettaglioAnzianitaComponent implements OnInit {
  chartIstoCategoria: any;
  chartIstoQualifica: any;
  chartIstoImpiego: any;
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

  ngOnInit() {
    //echarts
    let option;

    this.chartIstoCategoria = echarts.init(
      document.getElementById("istoCategoria")
    );
    this.chartIstoQualifica = echarts.init(
      document.getElementById("istoQualifica")
    );
    this.chartIstoImpiego = echarts.init(document.getElementById("istoDip"));
    this.chartAnnuale = echarts.init(document.getElementById("istoAnnuale"));

    this.optionInstoCategoria = EchartsModel.optionDettaglioAnzianitaIstoCategoria();
    this.optionInstoPerQualifica = EchartsModel.optionDettaglioAnzianitaIstoCategoria();
    this.optionInstoPerTipoImpiego = EchartsModel.optionDettaglioAnzianitaIstoCategoria();
    this.optionAndamentoAnnualeOrganico = EchartsModel.optionDettaglioAndamentoAnnualeOrganico();
    

    this.loadData();

    $(window).on("resize", () => {
      console.log("resize");
      this.chartIstoCategoria.resize();
      this.chartIstoQualifica.resize();
      this.chartIstoImpiego.resize();
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

    EchartsController.echartsLoadingShow(this.chartIstoImpiego);
    this.dettaglioService.getDipendentiPerTipoImpiego().subscribe(
      (data: any) => {
        this.optionInstoPerTipoImpiego.series[0].itemStyle.color = "#f2b53f";
        this.optionInstoPerTipoImpiego.series[0].data = [3, 22, 7, 14];
        EchartsController.refreshEcharts(
          this.chartIstoImpiego,
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

  private resetData() {
    this.optionInstoPerTipoImpiego.series[0].data = [];
    this.chartIstoImpiego.setOption(this.optionInstoPerTipoImpiego);

    this.optionInstoCategoria.series[0].data = [];
    this.chartIstoCategoria.setOption(this.optionInstoCategoria);

    this.optionInstoPerQualifica.series[0].data = [];
    this.chartIstoQualifica.setOption(this.optionInstoPerQualifica);

    this.optionAndamentoAnnualeOrganico.series[0].data = [];
    this.optionAndamentoAnnualeOrganico.series[1].data = [];
    this.chartAnnuale.setOption(this.optionAndamentoAnnualeOrganico);
  }
}
