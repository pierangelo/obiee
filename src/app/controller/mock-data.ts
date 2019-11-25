
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
                        scolarita: [
                            {
                                name: "DIPLOMA SCUOLA MEDIA SUPERIORE",
                                value: 2726
                            },
                            {
                                name: "LAUREA",
                                value: 714
                            }
                        ],
                        anzianita: {
                            eta_media: "45,61",
                            anzianita_aziendale_media: "17,89"
                        },
                        sindacato: {
                            iscritti: 2289,
                            rappresentanti: 383,
                            iscrizioni_items: [
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 891
                                },
                                {
                                    name: "UGL",
                                    value: 509
                                },
                                {
                                    name: "CISL",
                                    value: 410
                                },
                                {
                                    name: "CGIL",
                                    value: 252
                                },
                                {
                                    name: "UIL",
                                    value: 204
                                },

                                {
                                    name: "ASSIVOLO QUADRI",
                                    value: 114
                                },

                                {
                                    name: "CILA",
                                    value: 6
                                },
                                {
                                    name: "SACTA",
                                    value: 2
                                }
                            ],
                            rappresentanti_items: [
                                {
                                    name: "UIL",
                                    value: 2
                                },
                                {
                                    name: "UIL",
                                    value: 1
                                },

                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 1
                                },

                            ]
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
                            uomini: 60,
                            donne: 40
                        },
                        scolarita: [
                            {
                                name: "DIPLOMA SCUOLA MEDIA SUPERIORE",
                                value: 26
                            },
                            {
                                name: "LAUREA",
                                value: 3
                            }
                        ],
                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items: [
                                {
                                    name: "CISL",
                                    value: 7
                                },
                                {
                                    name: "UIL",
                                    value: 5
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 5
                                },
                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "ASSIVOLO QUADRI",
                                    value: 1
                                }
                            ],
                            rappresentanti_items: [
                                {
                                    name: "UIL",
                                    value: 2
                                },
                                {
                                    name: "UIL",
                                    value: 1
                                },

                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 1
                                },

                            ]
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
                            uomini: 70,
                            donne: 30
                        },
                        scolarita: [
                            {
                                name: "DIPLOMA SCUOLA MEDIA SUPERIORE",
                                value: 26
                            },
                            {
                                name: "LAUREA",
                                value: 3
                            }
                        ],
                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items: [
                                {
                                    name: "CISL",
                                    value: 7
                                },
                                {
                                    name: "UIL",
                                    value: 5
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 5
                                },
                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "ASSIVOLO QUADRI",
                                    value: 1
                                }
                            ],
                            rappresentanti_items: [
                                {
                                    name: "UIL",
                                    value: 2
                                },
                                {
                                    name: "UIL",
                                    value: 1
                                },

                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 1
                                },

                            ]
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
                            uomini: 14,
                            donne: 6
                        },
                        dipendentiGenere: {
                            uomini: 55,
                            donne: 45
                        },
                        scolarita: [
                            {
                                name: "DIPLOMA SCUOLA MEDIA SUPERIORE",
                                value: 26
                            },
                            {
                                name: "LAUREA",
                                value: 3
                            }
                        ],
                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items: [
                                {
                                    name: "CISL",
                                    value: 7
                                },
                                {
                                    name: "UIL",
                                    value: 5
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 5
                                },
                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "ASSIVOLO QUADRI",
                                    value: 1
                                }
                            ],
                            rappresentanti_items: [
                                {
                                    name: "UIL",
                                    value: 2
                                },
                                {
                                    name: "UIL",
                                    value: 1
                                },

                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 1
                                },

                            ]
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
                            uomini: 72,
                            donne: 28
                        },
                        scolarita: [
                            {
                                name: "DIPLOMA SCUOLA MEDIA SUPERIORE",
                                value: 26
                            },
                            {
                                name: "LAUREA",
                                value: 3
                            }
                        ],
                        anzianita: {
                            eta_media: "41,15",
                            anzianita_aziendale_media: "15,25"
                        },
                        sindacato: {
                            iscritti: 18,
                            rappresentanti: 5,
                            iscrizioni_items: [
                                {
                                    name: "CISL",
                                    value: 7
                                },
                                {
                                    name: "UIL",
                                    value: 5
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 5
                                },
                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "ASSIVOLO QUADRI",
                                    value: 1
                                }
                            ],
                            rappresentanti_items: [
                                {
                                    name: "UIL",
                                    value: 2
                                },
                                {
                                    name: "UIL",
                                    value: 1
                                },

                                {
                                    name: "UGL",
                                    value: 2
                                },
                                {
                                    name: "UN.I.CA.(EX-CILA-AV)",
                                    value: 1
                                },

                            ]
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
                    if (anno.data = filter.anno) {
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
                    if (anno.data = filter.anno) {
                        dati = anno.items.dipendentiGenere;
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
