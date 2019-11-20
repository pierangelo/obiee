import { Injectable } from "@angular/core";
import { EchartsController } from "src/app/controller/echarts.controller";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor() {}

  getDipendentiInForza(myChart, option) {
    EchartsController.echartsLoadingShow(myChart);
    setTimeout(() => {
      EchartsController.refreshEcharts(myChart, option);
    }, 1000);
  } //getDipendentiInForza

  getSindacati(myChart, option) {
    EchartsController.echartsLoadingShow(myChart);

    setTimeout(() => {
      EchartsController.refreshEcharts(myChart, option);
    }, 2000);
  } //getSindacati

  getRappresentantiSindacati(myChart, option) {
    EchartsController.echartsLoadingShow(myChart);

    setTimeout(() => {
      EchartsController.refreshEcharts(myChart, option);
    }, 2000);
  } //getSindacati


  getScolarita(myChart, option) {
    EchartsController.echartsLoadingShow(myChart);

    setTimeout(() => {
      EchartsController.refreshEcharts(myChart, option);
    }, 3000);
  } //getSindacati
}
