import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataMockService {
  constructor() {}

  static dataDipendentiPerCategoria = [
    {
      data: [5, 20, 36, 10, 10]
    }
  ];

  static dataDipendentiPerQualifica = [
    {
      data: [5, 20, 36, 10, 10]
    }
  ];

  static dataDipendentiPerTipoImpiego = [
    {
      data: [5, 20, 36, 10, 10]
    }
  ];
}
