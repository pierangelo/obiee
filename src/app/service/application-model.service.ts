import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ApplicationModelService {
  constructor() { }

  public anno = "2019";
  public uot = "ENAV S.P.A.";
  public checkedAnalisiPuntuale = "CONO";

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
