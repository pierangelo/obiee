import { Injectable } from "@angular/core";
import { EchartsController } from "src/app/controller/echarts.controller";
import { MockData } from './../controller/mock-data';
import { ApplicationModelService } from './application-model.service';
import { AppLayoutModule } from './../layout/app-layout.module';

declare var $;
@Injectable({
  providedIn: "root"
})
export class PeopleService {
  filter: any;
  constructor(public applicationModel: ApplicationModelService, public mockData: MockData) {
    this.filter = this.getFilter();
  }

  getUotInfo() {
    this.filter = this.getFilter();
    this.mockData.getUotInfo(this.filter);

  }
  getDipendentiInForza(myChart, option) {
    let totaleUominiDonne = 0;
    $(".total-genere").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {

      this.filter = this.getFilter();
      let result = this.mockData.getDipendendiInForza(this.filter);
      option.series[0].data = [result.uomini];
      option.series[1].data = [result.donne];
      this.applicationModel.totaleUominiDonne = result.uomini + result.donne;
      EchartsController.refreshEcharts(myChart, option, "total-genere");

    }, 1000);


  } //getDipendentiInForza
  getDipendentiGenere() {
    let totaleUominiDonne = 0;
    $(".total-genere").hide();


    this.filter = this.getFilter();
    let result = this.mockData.getDipendendiGenere(this.filter);

    this.applicationModel.totaleUominiGenere = result.uomini;
    this.applicationModel.totaleDonneGenere = result.donne;


  } //getDipendentiInForza


  getSindacati(myChart, option) {
    $(".total-iscrizioni-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option, "total-iscrizioni-sidacati");

    }, 2000);
  } //getSindacati

  getRappresentantiSindacati(myChart, option) {
    $(".total-rapp-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option, "total-rapp-sidacati");

    }, 2000);
  } //getSindacati

  getScolarita(myChart, option) {
    $(".total-scolarita").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option, "total-scolarita");

    }, 3000);
  } //getSindacati


  private getFilter() {
    let filter = {
      uot: this.applicationModel.uot,
      anno: this.applicationModel.anno,
      tipo: this.applicationModel.checkedAnalisiPuntuale// "PUNTUALE" : "CONO"
    };

    return filter;
  }
}
