import { EchartsController } from "../delegate/echarts.controller";

import { Injectable } from "@angular/core";
import { ApplicationModelService } from "../model/application-model";
import { Observable } from "rxjs";
import { EchartsModel } from "src/app/model/echarts.model";
import { DataMockService } from "./data-mock.service";
import { EventDispatcherService } from "./event-dispatcher.service";
import { MockData } from "../delegate/mock-data";

@Injectable({
  providedIn: "root"
})
export class DettaglioService {
  filter;
  constructor(
    public applicationModel: ApplicationModelService,
    public eventDispatcher: EventDispatcherService,
    public mockData: MockData
  ) {
    this.filter = this.getFilter();
  }

  getUotInfo() {
    this.filter = this.getFilter();
    this.mockData.getUotInfo(this.filter);
  }
  getDipendentiPerCategoria(myChart: any, option) {
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      let result = this.mockData.getDipendendiInForzaDettaglio(this.filter);
      option.yAxis.data = result.yAxis;
      option.series[0].data = [];
      option.series[0].data = result.data;
      EchartsController.refreshEcharts(myChart, option, "total-genere");
    }, 1000);
  }

  getDipendentiPerQualifica(myChart: any, option) {
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      let result = this.mockData.getDipendendiQualificaDettaglio(this.filter);
      option.yAxis.data = result.yAxis;
      option.series[0].data = [];
      option.series[0].data = result.data;
      EchartsController.refreshEcharts(myChart, option, "total-genere");
    }, 1000);
  }

  getDipendentiPerTipoImpiego(myChart: any, option) {
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      let result = this.mockData.getDipendendiTipoImpiegoDettaglio(this.filter);
      option.yAxis.data = result.yAxis;
      option.series[0].data = [];
      option.series[0].data = result.data;
      EchartsController.refreshEcharts(myChart, option, "total-genere");
    }, 1000);
  }

  getAndamentoAnnualeOrganico() {
    var optionAndamento = EchartsModel.dataDettaglioAndamentoAnnualeOrganico();
    const ob = new Observable(observer => {
      setTimeout(() => {
        console.log("net latency...");
        let result = this.mockData.getAndamentoAnnualeOrganico(
          this.getFilter()
        );

        optionAndamento[0].data = [];
        optionAndamento[1].data = [];

        if (result[0].name == "M") optionAndamento[0].data = result[0].data;

        if (result[0].name == "F") optionAndamento[1].data = result[0].data;

        if (result.length > 1) {
          optionAndamento[0].data = result[0].data;
          optionAndamento[1].data = result[1].data;
        }

        observer.next(optionAndamento);
      }, 1000);
    });

    return ob;
  } //getAndamentoAnnualeOrganico

  private getFilter() {
    let filter = {
      uot: this.applicationModel.uot,
      anno: this.applicationModel.anno,
      tipo: this.applicationModel.checkedAnalisiPuntuale, // "PUNTUALE" : "CONO"
      sesso: this.applicationModel.sesso,
      categoria: this.applicationModel.categoria
    };

    return filter;
  }
}
