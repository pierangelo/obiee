import { Injectable } from "@angular/core";
import { EchartsController } from "src/app/controller/echarts.controller";

declare var $;
@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor() {}

  getDipendentiInForza(myChart, option) {
    $(".total-genere").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option);
      $(".total-genere").fadeIn("12000");
    }, 1000);
  } //getDipendentiInForza

  getSindacati(myChart, option) {
    $(".total-iscrizioni-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option);
      $(".total-iscrizioni-sidacati").fadeIn("12000");
    }, 2000);
  } //getSindacati

  getRappresentantiSindacati(myChart, option) {
    $(".total-rapp-sidacati").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option);
      $(".total-rapp-sidacati").fadeIn("12000");
    }, 2000);
  } //getSindacati

  getScolarita(myChart, option) {
    $(".total-scolarita").hide();
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      //$(".total-genere").addClass("bump-animation");
      EchartsController.refreshEcharts(myChart, option);
      $(".total-scolarita").fadeIn("12000");
    }, 3000);
  } //getSindacati
}
