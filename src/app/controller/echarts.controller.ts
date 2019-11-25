declare var $;
export class EchartsController {
  //VARS
  static widgetLoadingTime = 1000;
  static colorLoading = "#0b3766";
  //Constructor
  constructor() { }


  /**
  * Carica i nuovi dati nell'Echarts, mostrando il loading...
  * @param echartsReference
  * @param options
  */
  static refreshEcharts(echartsReference: any, options: any, selectorClass: string = "") {
    echartsReference.showLoading({ color: this.colorLoading });
    echartsReference.setOption(options, false);
    setTimeout(() => {
      echartsReference.hideLoading();
      if (selectorClass != "")
        $("." + selectorClass).fadeIn("8000");
    }, this.widgetLoadingTime);
  }

  static echartsLoadingShow(echartsReference) {
    echartsReference.showLoading({ color: this.colorLoading });
  }

  static echartsLoadingHide(echartsReference) {
    echartsReference.hideLoading();
  }
}
