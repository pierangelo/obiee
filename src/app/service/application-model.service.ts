import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApplicationModelService {
  constructor() { }

  public anno = "2019";
  public uot = "ENAV S.P.A.";
  public checkedAnalisiPuntuale = "CONO";
  public categoria = "";
  public sesso = "";
  totaleUominiGenere = 77;
  totaleDonneGenere = 23;
  public totaleUominiDonne = 0;

  public uotInfo = {
    icao_code: "",
    traffic_permitted: "",
    ats_service: "",
    ats_operational_hours: "",
    app_service: "",

  }

  public anzianita = {
    eta_media: "45,61",
    anzianita_aziendale_media: "17,89",
    in_eta_pensionabile: "200"
  }


  public sindacato = {
    iscritti: 2289,
    rappresentanti: 383
  }
  resetUotInfo() {
    this.uotInfo = {
      icao_code: "",
      traffic_permitted: "",
      ats_service: "",
      ats_operational_hours: "",
      app_service: "",

    }
  }
}
