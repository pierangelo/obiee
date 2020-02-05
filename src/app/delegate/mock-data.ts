
import { ApplicationModelService } from 'src/app/model/application-model';
import { TemplateParseError, IfStmt } from '@angular/compiler';
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

    dipendentiCategoriaMap2019 = new Map<string, number>();

    constructor(public applicatioModel: ApplicationModelService) {
        this.dipendentiCategoriaMap2019.set("AMMINISTRTIVI", 3);


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
                },
                {
                    data: "2018",
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

            }, //ACC BRINDISI



        ],//fine aggregati
        dettaglio:
            [
                {
                    uot: "ENAV S.P.A.",
                    anno: [{
                        data: "2019",
                        //grafici   filtri
                        items: {
                            //generali
                            dipendentiInforza: {
                                uomini: 2543,
                                donne: 752
                            },
                            dipendentiGenere: {
                                uomini: 77,
                                donne: 23
                            },
                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["METEOROLOGI", "OPERATORE RADIOMISURE", "DIRIGENTE", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [32, 35, 46, 101, 255, 410, 529, 1887],

                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI", "OPERATORE RADIOMISURE", "DIRIGENTE", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [19, 33, 43, 82, 179, 219, 329, 1639],

                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE", "DIRIGENTE", "METEOROLOGI", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO", "AMMINISTRATIVI",],
                                            data: [2, 3, 13, 19, 36, 81, 248, 350],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [529]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [179]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [350]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1887]
                                        },
                                        uomini: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1639]
                                        },
                                        donne: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [248]
                                        }

                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [410]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [329]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [81]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [101]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [82]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [19]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [32]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [19]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [13]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [410]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [329]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [81]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [255]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [214]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [35]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [46, 354, 2895],
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [43, 306, 2194]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [3, 48, 701]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [73, 456]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [44, 135]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [29, 321]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [195, 1692]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [183, 1456]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [12, 236]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [7, 403]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [4, 325]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [3, 78]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 88]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [12, 70]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 18]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [3, 29]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [2, 17]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 12]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 22]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 20]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [50, 205]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [48, 171]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [2, 34]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["", "ST", "LO"],
                                            data: [46, 1143, 2106],

                                        },
                                        uomini: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [43, 672, 1828]
                                        },
                                        donne: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [3, 278, 471]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [529]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [179]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [350]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [259, 1628]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [214, 1425]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [45, 203]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: [""],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: [""],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: [""],
                                            data: [3]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [32, 378]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [17, 312]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [15, 66]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [16, 85]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [16, 66]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [19]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [9, 23]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [2, 17]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [6, 7]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [3, 32]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [3, 30]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [2]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [29, 226]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [28, 191]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 35]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [2662, 2629, 2636, 2609, 2572]

                                            }, {
                                                name: "F",
                                                data: [751, 766, 762, 757, 748]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [2662, 2629, 2636, 2609, 2572]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [751, 766, 762, 757, 748]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [189, 189, 186, 179, 179]

                                            }, {
                                                name: "F",
                                                data: [367, 364, 358, 349, 350]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [189, 189, 186, 179, 179]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [367, 364, 358, 349, 350]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [1659, 1661, 1687, 1665, 1639]

                                            }, {
                                                name: "F",
                                                data: [242, 242, 248, 248, 248]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [1659, 1661, 1687, 1665, 1639]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [242, 242, 248, 248, 248]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [50, 47, 44, 46, 43]

                                            }, {
                                                name: "F",
                                                data: [7, 4, 3, 3, 3]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [50, 47, 44, 46, 43]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [7, 4, 3, 3, 3]


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [358, 380, 338, 335, 329]

                                            }, {
                                                name: "F",
                                                data: [85, 88, 82, 82, 81]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [358, 380, 338, 335, 329]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [85, 88, 82, 82, 81]



                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [92, 92, 91, 87, 82]

                                            }, {
                                                name: "F",
                                                data: [19, 19, 19, 19, 19]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [92, 92, 91, 87, 82]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [19, 19, 19, 19, 19]
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [20, 20, 20, 20, 19]

                                            }, {
                                                name: "F",
                                                data: [13, 13, 13, 13, 13]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [20, 20, 20, 20, 19]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [13, 13, 13, 13, 13]
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [35, 36, 34, 33, 33]

                                            }, {
                                                name: "F",
                                                data: [2, 2, 2, 2, 2]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [35, 36, 34, 33, 33]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [2, 2, 2, 2, 2]
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [226, 211, 209, 207, 214]

                                            }, {
                                                name: "F",
                                                data: [31, 30, 32, 32, 35]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [226, 211, 209, 207, 214]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [31, 30, 32, 32, 35]
                                        }],
                                    },
                                ],
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

                            },

                        },

                    },
                    {
                        data: "2018",
                        //grafici   filtri
                        items: {
                            //generali
                            dipendentiInforza: {
                                uomini: 2543,
                                donne: 752
                            },
                            dipendentiGenere: {
                                uomini: 77,
                                donne: 23
                            },
                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["METEOROLOGI", "OPERATORE RADIOMISURE", "DIRIGENTE", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [32, 35, 46, 101, 255, 410, 529, 1887],

                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI", "OPERATORE RADIOMISURE", "DIRIGENTE", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [19, 33, 43, 82, 179, 219, 329, 1639],

                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE", "DIRIGENTE", "METEOROLOGI", "INFORMATICI", "TECNICI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO", "AMMINISTRATIVI",],
                                            data: [2, 3, 13, 19, 36, 81, 248, 350],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [529]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [179]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [350]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1887]
                                        },
                                        uomini: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1639]
                                        },
                                        donne: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [248]
                                        }

                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [410]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [329]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [81]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [101]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [82]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [19]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [32]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [19]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [13]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [410]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [329]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [81]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [255]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [214]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [35]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [46, 354, 2895],
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [43, 306, 2194]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [3, 48, 701]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [73, 456]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [44, 135]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [29, 321]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [195, 1692]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [183, 1456]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [12, 236]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [7, 403]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [4, 325]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [3, 78]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 88]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [12, 70]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 18]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [3, 29]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [2, 17]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 12]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 22]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [13, 20]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [50, 205]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [48, 171]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [2, 34]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["", "ST", "LO"],
                                            data: [46, 1143, 2106],

                                        },
                                        uomini: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [43, 672, 1828]
                                        },
                                        donne: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [3, 278, 471]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [529]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [179]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [350]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [259, 1628]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [214, 1425]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [45, 203]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: [""],
                                            data: [46]
                                        },
                                        uomini: {
                                            yAxis: [""],
                                            data: [43]
                                        },
                                        donne: {
                                            yAxis: [""],
                                            data: [3]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [32, 378]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [17, 312]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [15, 66]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [16, 85]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [16, 66]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [19]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [9, 23]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [2, 17]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [6, 7]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [3, 32]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [3, 30]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [2]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [29, 226]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [28, 191]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 35]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [2662, 2629, 2636, 2609, 2572]

                                            }, {
                                                name: "F",
                                                data: [751, 766, 762, 757, 748]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [2662, 2629, 2636, 2609, 2572]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [751, 766, 762, 757, 748]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [189, 189, 186, 179, 179]

                                            }, {
                                                name: "F",
                                                data: [367, 364, 358, 349, 350]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [189, 189, 186, 179, 179]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [367, 364, 358, 349, 350]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [1659, 1661, 1687, 1665, 1639]

                                            }, {
                                                name: "F",
                                                data: [242, 242, 248, 248, 248]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [1659, 1661, 1687, 1665, 1639]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [242, 242, 248, 248, 248]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [50, 47, 44, 46, 43]

                                            }, {
                                                name: "F",
                                                data: [7, 4, 3, 3, 3]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [50, 47, 44, 46, 43]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [7, 4, 3, 3, 3]


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [358, 380, 338, 335, 329]

                                            }, {
                                                name: "F",
                                                data: [85, 88, 82, 82, 81]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [358, 380, 338, 335, 329]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [85, 88, 82, 82, 81]



                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [92, 92, 91, 87, 82]

                                            }, {
                                                name: "F",
                                                data: [19, 19, 19, 19, 19]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [92, 92, 91, 87, 82]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [19, 19, 19, 19, 19]
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [20, 20, 20, 20, 19]

                                            }, {
                                                name: "F",
                                                data: [13, 13, 13, 13, 13]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [20, 20, 20, 20, 19]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [13, 13, 13, 13, 13]
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [35, 36, 34, 33, 33]

                                            }, {
                                                name: "F",
                                                data: [2, 2, 2, 2, 2]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [35, 36, 34, 33, 33]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [2, 2, 2, 2, 2]
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [226, 211, 209, 207, 214]

                                            }, {
                                                name: "F",
                                                data: [31, 30, 32, 32, 35]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [226, 211, 209, 207, 214]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [31, 30, 32, 32, 35]
                                        }],
                                    },
                                ],
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

                            },

                        },

                    },
                    ]
                },

                {
                    uot: "BRINDISI",
                    anno: [{
                        data: "2019",
                        items: {

                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 4, 15],

                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [4, 10],

                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 5],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",


                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [15]
                                        },
                                        uomini: {
                                            yAxis: [" CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: [" CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [5]
                                        }


                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 19],
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [14]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 5]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 14]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 4]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [2, 18],

                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [14]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO",],
                                            data: [2, 4]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 22]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 10]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 12]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [14, 10, 14, 15, 14]

                                            }, {
                                                name: "F",
                                                data: [5, 5, 6, 6, 6]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [14, 10, 14, 15, 14]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [5, 5, 6, 6, 6]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: []

                                            }, {
                                                name: "F",
                                                data: [1, 1, 1, 1, 1]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [1, 1, 1, 1, 1]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [14, 10, 10, 10, 10]

                                            }, {
                                                name: "F",
                                                data: [4, 4, 5, 5, 5]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [14, 10, 10, 10, 10]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [4, 4, 5, 5, 5]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: []

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [4, 4, 4, 5, 4]

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [4, 4, 4, 5, 4]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                ],
                            },

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

                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 4, 15],

                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [4, 10],

                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 5],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",


                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [15]
                                        },
                                        uomini: {
                                            yAxis: [" CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: [" CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [5]
                                        }


                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [0]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 19],
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [14]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 5]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 14]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [1, 4]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [2, 18],

                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [14]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO",],
                                            data: [2, 4]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 22]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 10]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 12]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [10]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [0, 0]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [4]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [4]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [14, 10, 14, 15, 14]

                                            }, {
                                                name: "F",
                                                data: [5, 5, 6, 6, 6]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [14, 10, 14, 15, 14]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [5, 5, 6, 6, 6]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: []

                                            }, {
                                                name: "F",
                                                data: [1, 1, 1, 1, 1]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [1, 1, 1, 1, 1]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [14, 10, 10, 10, 10]

                                            }, {
                                                name: "F",
                                                data: [4, 4, 5, 5, 5]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [14, 10, 10, 10, 10]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [4, 4, 5, 5, 5]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: []

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [4, 4, 4, 5, 4]

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [4, 4, 4, 5, 4]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                ],
                            },

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
                    },],

                }, //BRINDISI

                {
                    uot: "ACC BRINDISI",
                    anno: [{
                        data: "2019",
                        items: {

                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "TECNICI", "INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 2, 3, 6, 12, 103],

                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "TECNICI", "INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 2, 2, 3, 7, 87],

                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 3, 5, 16],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [103]
                                        },
                                        uomini: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [87]
                                        },
                                        donne: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [16]
                                        }

                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [12]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [5]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [3]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [1]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [1, 14, 112],
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [1, 14, 87]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [25]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [3]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [14, 89]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [14, 73]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [16]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [12]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [5]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["", "ST", "LO"],
                                            data: [1, 27, 99],

                                        },
                                        uomini: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [1, 18, 83]
                                        },
                                        donne: {
                                            yAxis: ["LO", "ST"],
                                            data: [9, 16]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [5, 98]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 76]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 12]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: [""],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: [""],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: [""],
                                            data: [0]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 11]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 4]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [110, 111, 102, 99, 102]

                                            }, {
                                                name: "F",
                                                data: [26, 25, 24, 24, 25]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [110, 111, 102, 99, 102]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [26, 25, 24, 24, 25]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [5, 5, 3, 3, 3]

                                            }, {
                                                name: "F",
                                                data: [3, 2, 2, 2, 3]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [5, 5, 3, 3, 3]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [3, 2, 2, 2, 3]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [89, 89, 85, 83, 87]

                                            }, {
                                                name: "F",
                                                data: [16, 16, 16, 16, 16]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [89, 89, 85, 83, 87]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [16, 16, 16, 16, 16]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [1, 1, 1, 1, 1]

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [1, 1, 1, 1, 1]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [10, 10, 7, 7, 7]

                                            }, {
                                                name: "F",
                                                data: [6, 6, 5, 5, 5]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [10, 10, 7, 7, 7]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [6, 6, 5, 5, 5]


                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [3, 4, 4, 3, 2]

                                            }, {
                                                name: "F",
                                                data: [1, 1, 1, 1, 1]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [3, 4, 4, 3, 2]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [1, 1, 1, 1, 1]
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [2, 2, 2, 2, 2]

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [2, 2, 2, 2, 2]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                ],
                            },



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

                            dipendentiPerCategoria: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "TECNICI", "INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 2, 3, 6, 12, 103],

                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "TECNICI", "INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 2, 2, 3, 7, 87],

                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI", "AMMINISTRATIVI", "ESPERTI DI ASSISTENZA AL VOLO", "CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [1, 3, 5, 16],

                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        },
                                        donne: {
                                            yAxis: ["AMMINISTRATIVI"],
                                            data: [6]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [103]
                                        },
                                        uomini: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [87]
                                        },
                                        donne: {
                                            yAxis: ["CONTROLLORI DEL TRAFFICO AEREO"],
                                            data: [16]
                                        }

                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [12]
                                        },
                                        uomini: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["ESPERTI DI ASSISTENZA AL VOLO"],
                                            data: [5]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",

                                        generale: {
                                            yAxis: ["INFORMATICI"],
                                            data: [3]
                                        },
                                        uomini: {
                                            yAxis: ["INFORMATICI"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["INFORMATICI"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",

                                        generale: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["METEOROLOGI"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["OPERATORE RADIOMISURE"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: {
                                            yAxis: ["TECNICI"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["TECNICI"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["TECNICI"],
                                            data: [1]
                                        }
                                    },
                                ]

                            },
                            dipendentiPerQualifica: {
                                ///piccolo-->grande

                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [1, 14, 112],
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE", "QUADRO", "IMPIEGATO"],
                                            data: [1, 14, 87]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [25]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [3]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [3]
                                        }
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [14, 89]
                                        },
                                        uomini: {
                                            yAxis: ["QUADRO", "IMPIEGATO"],
                                            data: [14, 73]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [16]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",

                                        generale: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: ["DIRIGENTE"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",

                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [12]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [5]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },

                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["IMPIEGATO"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            dipendentiPerTipoImpiego: {
                                ///piccolo-->grande
                                items: [
                                    {
                                        categoria: "",
                                        generale: {
                                            yAxis: ["", "ST", "LO"],
                                            data: [1, 27, 99],

                                        },
                                        uomini: {
                                            yAxis: ["", "LO", "ST"],
                                            data: [1, 18, 83]
                                        },
                                        donne: {
                                            yAxis: ["LO", "ST"],
                                            data: [9, 16]
                                        }
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [6]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        }
                                    },

                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [5, 98]
                                        },
                                        uomini: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 76]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [4, 12]
                                        }
                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: {
                                            yAxis: [""],
                                            data: [1]
                                        },
                                        uomini: {
                                            yAxis: [""],
                                            data: [1]
                                        },
                                        donne: {
                                            yAxis: [""],
                                            data: [0]
                                        }
                                    }, {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 11]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [7]
                                        },
                                        donne: {
                                            yAxis: ["ST", "LO"],
                                            data: [1, 4]
                                        }
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [3]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [1]
                                        }
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "OPERATORI RADIOMISURE",
                                        generale: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        uomini: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        },
                                        donne: {
                                            yAxis: ["LO"],
                                            data: [0]
                                        }
                                    },
                                    {
                                        categoria: "TECNICI",
                                        generale: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        uomini: {
                                            yAxis: ["ST"],
                                            data: [2]
                                        },
                                        donne: {
                                            yAxis: ["ST"],
                                            data: [0]
                                        }
                                    },
                                ]
                            },
                            andamentoAnnualeOrganico: {
                                items: [
                                    {
                                        categoria: "",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [110, 111, 102, 99, 102]

                                            }, {
                                                name: "F",
                                                data: [26, 25, 24, 24, 25]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [110, 111, 102, 99, 102]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [26, 25, 24, 24, 25]

                                        }],
                                    },
                                    {
                                        categoria: "AMMINISTRATIVI",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [5, 5, 3, 3, 3]

                                            }, {
                                                name: "F",
                                                data: [3, 2, 2, 2, 3]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [5, 5, 3, 3, 3]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [3, 2, 2, 2, 3]

                                        }],
                                    },
                                    {
                                        categoria: "CONTROLLORI DEL TRAFFICO AEREO",

                                        generale: [
                                            {
                                                name: "M",

                                                data: [89, 89, 85, 83, 87]

                                            }, {
                                                name: "F",
                                                data: [16, 16, 16, 16, 16]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [89, 89, 85, 83, 87]


                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [16, 16, 16, 16, 16]

                                        }],

                                    },
                                    {
                                        categoria: "DIRIGENTE",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [1, 1, 1, 1, 1]

                                            }, {
                                                name: "F",
                                                data: []

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [1, 1, 1, 1, 1]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []


                                        }],
                                    },
                                    {
                                        categoria: "ESPERTI DI ASSISTENZA AL VOLO",
                                        generale: [
                                            {
                                                name: "M",

                                                data: [10, 10, 7, 7, 7]

                                            }, {
                                                name: "F",
                                                data: [6, 6, 5, 5, 5]

                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [10, 10, 7, 7, 7]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [6, 6, 5, 5, 5]


                                        }],
                                    },
                                    {
                                        categoria: "INFORMATICI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: [3, 4, 4, 3, 2]

                                            }, {
                                                name: "F",
                                                data: [1, 1, 1, 1, 1]
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [3, 4, 4, 3, 2]
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: [1, 1, 1, 1, 1]
                                        }],
                                    },
                                    {
                                        categoria: "METEOROLOGI",
                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                    {
                                        categoria: "OPERATORE RADIOMISURE",

                                        generale: [
                                            {
                                                name: "M",
                                                data: []

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: []
                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },

                                    {
                                        categoria: "TECNICI",

                                        generale: [
                                            {
                                                name: "M",
                                                data: [2, 2, 2, 2, 2]

                                            }, {
                                                name: "F",
                                                data: []
                                            }
                                        ],
                                        uomini: [
                                            {
                                                name: "M",
                                                data: [2, 2, 2, 2, 2]

                                            }
                                        ],
                                        donne: [{
                                            name: "F",
                                            data: []
                                        }],
                                    },
                                ],
                            },



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



            ]
        //fine dettaglio
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
    public getDipendendiInForzaDettaglio(filter: any) {

        let dati;
        this.dati.dettaglio.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {

                        anno.items.dipendentiPerCategoria.items.forEach(element => {
                            if (filter.categoria == element.categoria) {
                                dati = element.generale;
                                if (filter.sesso == "F") {
                                    dati = element.donne
                                }
                                if (filter.sesso == "M") {
                                    dati = element.uomini;
                                }
                                if (filter.sesso == "") {
                                    dati = element.generale;
                                }
                            }
                        })

                    }



                });
            }
        });

        return dati;

    }

    //restituisce gli aggregati
    public getDipendendiQualificaDettaglio(filter: any) {



        let dati;
        this.dati.dettaglio.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {


                        anno.items.dipendentiPerQualifica.items.forEach(element => {
                            if (filter.categoria == element.categoria) {
                                dati = element.generale;

                                if (filter.sesso == "F") {
                                    dati = element.donne
                                }
                                if (filter.sesso == "M") {
                                    dati = element.uomini;
                                }
                                if (filter.sesso == "") {
                                    dati = element.generale;
                                }
                            }
                        })

                    }



                });
            }
        });
        return dati;

    }

    //restituisce gli aggregati
    public getDipendendiTipoImpiegoDettaglio(filter: any) {



        let dati;
        this.dati.dettaglio.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {



                        anno.items.dipendentiPerTipoImpiego.items.forEach(element => {
                            if (filter.categoria == element.categoria) {
                                dati = element.generale;
                                if (filter.sesso == "F") {
                                    dati = element.donne
                                }
                                if (filter.sesso == "M") {
                                    dati = element.uomini;
                                }
                                if (filter.sesso == "") {
                                    dati = element.generale;
                                }
                            }
                        })

                    }



                });
            }
        });

        return dati;

    }

    public getAndamentoAnnualeOrganico(filter: any) {
        let dati;
        this.dati.dettaglio.forEach(element => {
            if (element.uot == filter.uot) {
                element.anno.forEach(anno => {
                    if (anno.data == filter.anno) {
                        anno.items.andamentoAnnualeOrganico.items.forEach(element => {

                            if (filter.categoria == element.categoria) {
                                dati = element.generale;
                                if (filter.sesso == "F") {
                                    dati = element.donne
                                }
                                if (filter.sesso == "M") {
                                    dati = element.uomini;
                                }
                                if (filter.sesso == "") {
                                    dati = element.generale;
                                }
                            }
                        })
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
