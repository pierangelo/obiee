import { Injectable } from '@angular/core';
import { ApplicationModelService } from 'src/app/service/application-model.service';
import { EventDispatcherService } from './event-dispatcher.service';
import { DataMockService } from './data-mock.service';
import { Observable } from 'rxjs';
import { EchartsModel } from 'src/app/utils/echarts.model';

@Injectable({
  providedIn: 'root'
})
export class DettaglioAnzianitaService {
  constructor(
    public applicationModel: ApplicationModelService,
    public eventDispatcher: EventDispatcherService
  ) {}

  getDipendentiPerCategoria() {
    //array...
    let series = DataMockService.dataDipendentiPerCategoria;
    const ob = new Observable(observer => {
      setTimeout(() => {
        console.log("net latency...");
        observer.next(series);
      }, 2000);
    });

    return ob;
  } //getDipendentiPerCategoria

  getDipendentiPerQualifica() {
    var optionInstoCategoria = EchartsModel.optionDettaglioIstoCategoria();
    const ob = new Observable(observer => {
      setTimeout(() => {
        console.log("net latency...");
        observer.next(optionInstoCategoria);
      }, 1000);
    });

    return ob;
  } //getDipendentiPerQualifica

  getDipendentiPerTipoImpiego() {
    var optionInstoCategoria = EchartsModel.optionDettaglioIstoCategoria();
    const ob = new Observable(observer => {
      setTimeout(() => {
        console.log("net latency...");
        observer.next(optionInstoCategoria);
      }, 2000);
    });

    return ob;
  } //getDipendentiPerTipoImpiego

  getAndamentoAnnualeOrganico() {
    var optionAndamento = EchartsModel.dataDettaglioAndamentoAnnualeOrganico();
    const ob = new Observable(observer => {
      setTimeout(() => {
        console.log("net latency...");
        observer.next(optionAndamento);
      }, 1000);
    });

    return ob;
  } //getAndamentoAnnualeOrganico

  getUotInfo() {} //getUotInfo
}
