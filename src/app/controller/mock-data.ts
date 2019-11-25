
import { ApplicationModelService } from 'src/app/service/application-model.service';
import { TemplateParseError } from '@angular/compiler';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MockData {


    attributiUOT = [{
        "uo_figlio_desc": "ACC BRINDISI - UFF. SICUREZZA OPERATIVA",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - OPERATIONS",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - STAFF 1"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - SAFETY",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI-UFFICIO SICUREZZA OPERATIVA",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "BRINDISI C.R.A.V.",
        "codice_icao": "LIBB",
        "app_service": "BARI; BRINDISI"
    }, {
        "uo_figlio_desc": "ACC BRINDISI-UFFICIO ADDESTRAMENTO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - TRAINING",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "PERSONALE ACC BRINDISI",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "BRINDISI - ROSTERING AND TRAINING",
        "codice_icao": "LIBR",
        "traffic_permitted": "IFR\/VFR",
        "ats_service": "TWR",
        "ats_operational_hours": "H24",
        "app_service": "ACC BRINDISI"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - SUPPORT OFFICE",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - STAFF",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "BRINDISI",
        "codice_icao": "LIBR",
        "traffic_permitted": "IFR\/VFR",
        "ats_service": "TWR",
        "ats_operational_hours": "H24",
        "app_service": "ACC BRINDISI"
    }, {
        "uo_figlio_desc": "ACC BRINDISI-UFFICIO ESERCIZIO E AUTOM.",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI-UFFICIO OPERAZIONI",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. AUTOMAZIONE ESERCIZIO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - AUTOMATION",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. SICUREZZA",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - ROSTERING",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ARO BRINDISI",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. ESERCIZIO E AUTOMAZIONE",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. TECNICO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFFICIO GESTIONALE",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. ADDESTRAMENTO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. IMPIEGO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI-UFFICIO IMPIEGO",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. OPERAZIONI",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI - UFF. GESTIONALE",
        "codice_icao": "-"
    }, {
        "uo_figlio_desc": "ACC BRINDISI",
        "codice_icao": "LIBB",
        "traffic_permitted": "",
        "ats_service": "",
        "ats_operational_hours": "",
        "app_service": "BARI; BRINDISI"
    }, {
        "uo_figlio_desc": "BRINDISI - IMPIEGO E ADDESTRAMENTO",
        "codice_icao": "LIBR",
        "traffic_permitted": "IFR\/VFR",
        "ats_service": "TWR",
        "ats_operational_hours": "H24",
        "app_service": "ACC BRINDISI"
    }];



    constructor(public applicatioModel: ApplicationModelService) {

    }



    public dati = {
        aggregati: [
            {
                uot: "ENAV S.P.A.",
                anno: [{
                    data: "2019",
                    items: {
                        dipendentiInforza: {
                            uomini: 2543,
                            donne: 752
                        },
                        dipendentiGenere: {
                            uomini: 77,
                            donne: 23
                        },
                        scolarita:
                        {
                            ///piccolo-->grande
                            yAxis: ["LICENZA ELEMENTARE", "DIPLOMA DI SPECIALIZZAZIONE", "DIPLOMA PROFESSIONALE", "MASTER", "DIPLOMA SCUOLA MEDIA INFERIORE", "LAUREA", "DIPLOMA SCUOLA MEDIA SUPERIORE"],
                            data: [2, 4, 7, 13, 75, 714, 2726]

                        },
                        anzianita: {
                            eta_media: "45,61",
                            anzianita_aziendale_media: "17,89",
                            in_eta_pensionabile: "200"
                        },
                        sindacato: {
                            iscritti: 2289,
                            rappresentanti: 383,
                            iscrizioni_items:
                            {  ///piccolo-->grande
                                yAxis: ["SACTA", "CILA", "ASSIVOLO QUADRI", "UIL", "CGIL", "CISL", "UGL", "UN.I.CA.(EX-CILA-AV)"],
                                data: [2, 6, 114, 204, 252, 410, 509, 891]
                            },
                            rappresentanti_items:
                            {
                                yAxis: ["ASSIVOLO QUADRI", "CGIL", "UIL", "CISL", "UGL", "UN.I.CA.(EX-CILA-AV)"],
                                data: [22, 36, 42, 71, 95, 119]
                            },

                        }
                    }
                }]
            },

            {
                uot: "BRINDISI",
                anno: [{
                    data: "2019",
                    items: {
                        dipendentiInforza: {
                            uomini: 14,
                            donne: 6
                        },
                        dipendentiGenere: {
                            uomini: 70,
                            donne: 30
                        },
                        scolarita: {
                            ///piccolo-->grande
                            yAxis: ["LAUREA", "DIPLOMA SCUOLA MEDIA SUPERIORE"],
                            data: [3, 26]

                        },

                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25",
                            in_eta_pensionabile: "2"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items:
                            {  ///piccolo-->grande
                                yAxis: ["ASSIVOLO QUADRI", "UGL", "UN.I.CA.(EX-CILA-AV)", "UIL", "CISL"],
                                data: [1, 2, 5, 5, 7]
                            },
                            rappresentanti_items:
                            {
                                yAxis: ["UN.I.CA.(EX-CILA-AV)", "UGL", "UIL", "CSIL"],
                                data: [1, 1, 1, 2]
                            },


                        }
                    }
                },
                {
                    data: "2018",
                    items: {
                        dipendentiInforza: {
                            uomini: 14,
                            donne: 6
                        },
                        dipendentiGenere: {
                            uomini: 67,
                            donne: 33
                        },
                        scolarita: {
                            ///piccolo-->grande
                            yAxis: ["LAUREA", "DIPLOMA SCUOLA MEDIA SUPERIORE"],
                            data: [3, 26]

                        },

                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25",
                            in_eta_pensionabile: "2"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items:
                            {  ///piccolo-->grande
                                yAxis: ["ASSIVOLO QUADRI", "UGL", "UN.I.CA.(EX-CILA-AV)", "UIL", "CISL"],
                                data: [1, 2, 5, 5, 7]
                            },
                            rappresentanti_items:
                            {
                                yAxis: ["UN.I.CA.(EX-CILA-AV)", "UGL", "UIL", "CSIL"],
                                data: [1, 1, 1, 2]
                            },


                        }
                    }
                }],

            }, //BRINDISI

            {
                uot: "ACC BRINDISI",
                anno: [{
                    data: "2019",
                    items: {
                        dipendentiInforza: {
                            uomini: 102,
                            donne: 25
                        },
                        dipendentiGenere: {
                            uomini: 80,
                            donne: 20
                        },
                        scolarita: {
                            ///piccolo-->grande
                            yAxis: ["LICENZA ELEMENTARE", "LAUREA", "DIPLOMA SCUOLA MEDIA SUPERIORE"],
                            data: [1, 36, 142]

                        },
                        anzianita: {
                            eta_media: "45,08",
                            anzianita_aziendale_media: "17,35",
                            in_eta_pensionabile: "9"

                        },
                        sindacato: {
                            iscritti: 109,
                            rappresentanti: 23,
                            iscrizioni_items:
                            {  ///piccolo-->grande
                                yAxis: ["ASSIVOLO QUADRI", "CIGL", "UIL", "UGL", "CISL", "UN.I.CA.(EX-CILA-AV)"],
                                data: [6, 10, 20, 20, 25, 33]
                            },
                            rappresentanti_items:
                            {
                                yAxis: ["ASSIVOLO QUADRI", "CIGL", "UN.I.CA.(EX-CILA-AV)", "UIL", "UGL", "CSIL"],
                                data: [1, 2, 3, 4, 5, 8]
                            },


                        }
                    }
                },
                {
                    data: "2018",
                    items: {
                        dipendentiInforza: {
                            uomini: 101,
                            donne: 24
                        },
                        dipendentiGenere: {
                            uomini: 72,
                            donne: 28
                        },
                        scolarita: {
                            ///piccolo-->grande
                            yAxis: ["LICENZA ELEMENTARE", "LAUREA", "DIPLOMA SCUOLA MEDIA SUPERIORE"],
                            data: [1, 36, 142]

                        },
                        anzianita: {
                            eta_media: "45,08",
                            anzianita_aziendale_media: "17,35",
                            in_eta_pensionabile: "9"

                        },
                        sindacato: {
                            iscritti: 109,
                            rappresentanti: 23,
                            iscrizioni_items:
                            {  ///piccolo-->grande
                                yAxis: ["ASSIVOLO QUADRI", "CIGL", "UIL", "UGL", "CISL", "UN.I.CA.(EX-CILA-AV)"],
                                data: [6, 10, 20, 20, 25, 33]
                            },
                            rappresentanti_items:
                            {
                                yAxis: ["ASSIVOLO QUADRI", "CIGL", "UN.I.CA.(EX-CILA-AV)", "UIL", "UGL", "CSIL"],
                                data: [1, 2, 3, 4, 5, 8]
                            },


                        }
                    }
                }],

            }, //BRINDISI



        ],//fine aggregati
        dettaglio: {

            //(([..]))

        }//fine dettaglio
    };


    public datiAccBrindisi = {

    };


    //restituisce gli aggregati
    public getDipendendiInForza(filter: any) {

        let dati;
        this.dati.aggregati.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        dati = anno.items.dipendentiInforza;
                    }
                });
            }
        });

        return dati;

    }


    //restituisce gli aggregati
    public getDipendendiGenere(filter: any) {

        let dati;
        this.dati.aggregati.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        dati = anno.items.dipendentiGenere;
                    }
                });
            }
        });

        return dati;

    }

    //restituisce gli aggregati
    public getScolarita(filter: any) {

        let dati;
        this.dati.aggregati.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        dati = anno.items.scolarita;
                    }
                });
            }
        });

        return dati;

    }


    //restituisce gli aggregati
    public getAnzianita(filter: any) {

        let dati;
        this.dati.aggregati.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        dati = anno.items.anzianita;
                    }
                });
            }
        });

        return dati;

    }

    //restituisce gli aggregati
    public getIscrizioni(filter: any) {

        let dati;
        this.dati.aggregati.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        dati = anno.items.sindacato;
                    }
                });
            }
        });

        return dati;

    }




    public getUotInfo(filter: any) {

        let info = this.applicatioModel.uotInfo;

        let temp = this.attributiUOT.filter(e => {
            return e.uo_figlio_desc === filter.uot;
        });
        /*
        "uo_figlio_desc": "ACC BRINDISI",
        "codice_icao": "LIBB",
        "traffic_permitted": "",
        "ats_service": "",
        "ats_operational_hours": "",
        "app_service": "BARI; BRINDISI"
        */
        try {
            this.applicatioModel.uotInfo.icao_code = temp[0].codice_icao;
            this.applicatioModel.uotInfo.traffic_permitted = temp[0].traffic_permitted;
            this.applicatioModel.uotInfo.ats_service = temp[0].ats_service;
            this.applicatioModel.uotInfo.ats_operational_hours = temp[0].ats_operational_hours;
            this.applicatioModel.uotInfo.app_service = temp[0].app_service;
        } catch (error) {

        }


    }
}
