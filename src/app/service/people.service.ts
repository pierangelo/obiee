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

      let tot = result.uomini + result.donne;
      let percUomini = result.uomini / tot;
      let percDonne = result.donne / tot;


      this.applicationModel.totaleUominiDonne = result.uomini + result.donne;
      EchartsController.refreshEcharts(myChart, option, "total-genere");

    }, 1000);


  } //getDipendentiInForza
  getDipendentiGenere(myChart, option) {
    let totaleUominiDonne = 0;
    $(".total-genere").hide();


    this.filter = this.getFilter();
    let result = this.mockData.getDipendendiGenere(this.filter);

    option.series[0].data[0].value = result.uomini;
    option.series[0].data[2].value = result.donne;

    this.applicationModel.totaleUominiGenere = result.uomini;
    this.applicationModel.totaleDonneGenere = result.donne;

    EchartsController.refreshEcharts(myChart, option, "");

  } //getDipendentiInForza


  getScolarita(myChart, option) {
    $(".total-scolarita").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();

      let result = this.mockData.getScolarita(this.filter);
      option.yAxis.data = result.yAxis;

      option.series[0].data = [];
      option.series[0].data = result.data;
      EchartsController.refreshEcharts(myChart, option, "");

    }, 3000);
  } //getSindacati

  getAnzianita() {
    $(".total-anzianita").hide();
    setTimeout(() => {
      this.filter = this.getFilter();

      let result = this.mockData.getAnzianita(this.filter);
      this.applicationModel.anzianita = result;
      $(".total-anzianita").fadeIn("8000");


    }, 3000);
  } //getSindacati



  getSindacati(myChart, option) {
    $(".total-iscrizioni-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      let result = this.mockData.getIscrizioni(this.filter);
      option.yAxis.data = result.iscrizioni_items.yAxis;
      option.series[0].data = [];
      option.series[0].data = result.iscrizioni_items.data;

      this.applicationModel.sindacato.iscritti = result.iscritti,
        this.applicationModel.sindacato.rappresentanti = result.rappresentanti,
        EchartsController.refreshEcharts(myChart, option, "total-iscrizioni-sidacati");

    }, 2000);
  } //getSindacati

  getRappresentantiSindacati(myChart, option) {
    $(".total-rapp-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();
      let result = this.mockData.getIscrizioni(this.filter);
      option.yAxis.data = result.rappresentanti_items.yAxis;
      option.series[0].data = [];
      option.series[0].data = result.rappresentanti_items.data;
      EchartsController.refreshEcharts(myChart, option, "total-rapp-sidacati");

    }, 2000);
  } //getSindacati

  getPictionarBar(myChart, option) {

    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      this.filter = this.getFilter();


      EchartsController.refreshEcharts(myChart, option, "");

    }, 2000);
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
