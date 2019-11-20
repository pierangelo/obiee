export class EchartsModel {
  constructor() {}

  static exampleChart() {
    var option = {
      title: {
        text: ""
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      tooltip: {},
      legend: {
        show: false,
        data: ["Sales"]
      },
      xAxis: {
        data: ["UIL", "CGIL", "UGL", "CISL"]
      },

      yAxis: {},
      series: [
        {
          name: "Sales",
          type: "bar",
          itemStyle: {
            color: "#26a0fc"
          },
          data: [5, 20, 36, 10, 10]
        }
      ]
    };
    return option;
  }
  static optionPeopleSindacati() {
    let option = {
      tooltip: {},
      legend: {
        show: false,
        data: ["存活", "死亡"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        data: ["CGIL", "UGL", "CISL", "UIL", "ASSIVOLO"]
      },
      series: [
        {
          name: "CGIL",
          type: "bar",

          label: {
            normal: {
              formatter: function(d) {
                return d.value;
              },
              fontSize: "12",
              show: true,
              position: "insideRight"
            }
          },
          data: [14, 31, 5, 8, 22],
          itemStyle: {
            color: "#26a0fc"
          }
        }
      ]
    };
    return option;
  } //optionPeopleDipendentiInForza

  static optionPeopleRappresentantiSindacati() {
    let option = {
      tooltip: {},
      legend: {
        show: false,
        data: ["存活", "死亡"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        data: ["CGIL", "UGL", "CISL", "UIL", "ASSIVOLO"]
      },
      series: [
        {
          name: "CGIL",
          type: "bar",

          label: {
            normal: {
              formatter: function(d) {
                return d.value;
              },
              fontSize: "12",
              show: true,
              position: "insideRight"
            }
          },
          data: [1, 4, 6, 8, 10],
          itemStyle: {
            color: "#26a0fc"
          }
        }
      ]
    };
    return option;
  } // optionPeopleRappresentantiSindacati

  static optionPeopleDipendentiInForza() {
    let option = {
      tooltip: {},
      legend: {
        show: false,
        data: ["存活", "死亡"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value"
      },
      yAxis: {
        type: "category",
        data: [""]
      },
      series: [
        {
          name: "Uomini",
          type: "bar",

          label: {
            normal: {
              formatter: function(d) {
                return "Uomini: " + d.value;
              },
              fontSize: "12",
              show: true,
              position: "insideRight"
            }
          },
          data: [14],
          itemStyle: {
            color: "#01579b"
          }
        },
        {
          name: "Donne",
          type: "bar",
          itemStyle: {
            color: "#9b0157"
          },
          label: {
            normal: {
              formatter: function(d) {
                return "Donne: " + d.value;
              },
              fontSize: "12",
              show: true,
              position: "insideRight"
            }
          },
          data: [6]
        }
      ]
    };
    return option;
  } //optionPeopleSindacati

  static optionDettaglioIstoCategoria() {
    var option = {
      title: {
        text: ""
      },
      grid: {
        width: "90%",
        left: "4%",
        right: "1%",
        bottom: "4%",
        containLabel: true
      },
      tooltip: {},
      legend: {
        show: false,
        data: [""]
      },
      xAxis: {
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 1
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: true,
          lineStyle: {
            width: 0
          }
        }
      },
      yAxis: {
        data: ["CAT1", "CAT2", "CAT3", "CAT4"]
      },
      /*
        xAxis: {
          data: ["CAT1", "CAT2", "CAT3", "CAT4"]
        },
  
        yAxis: {},
        */
      series: [
        {
          name: "",
          type: "bar",
          itemStyle: {
            color: "#5fd3e6"
          },

          data: [5, 20, 36, 10, 10]
        }
      ]
    };

    return option;
  }

  static optionDettaglioAndamentoAnnualeOrganico() {
    //andamento annuale organico
    let options = {
      legend: {
        show: true,
        data: ["Uomini", "Donne"]
      },
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis",
        padding: [2, 10],
        textStyle: {
          fontSize: 16
        }
      },
      xAxis: {
        type: "category",
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 1
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: true,
          lineStyle: {
            width: 1
          }
        },
        axisLabel: {
          fontWeight: "bold"
        },
        data: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]
      },
      grid: {
        width: "90%",
        left: "4%",
        right: "1%",
        bottom: "4%",
        containLabel: true
      },

      yAxis: {
        type: "value",
        name: "M",
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 1
          }
        },
        axisTick: {
          lineStyle: {
            width: 1
          }
        },
        axisLabel: {
          //fontWeight: "bold",
        }
      },
      series: [
        {
          name: "Uomini",
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          smooth: true,
          animationDuration: 2000,
          itemStyle: {
            normal: {
              color: "#01579b"
            }
          },
          lineStyle: {
            normal: {
              width: 3
            }
          },
          data: [10, 40, 74, 83, 120, 146, 180]
        },
        {
          name: "Donne",
          type: "line",
          symbol: "circle",
          symbolSize: 10,
          smooth: true,
          animationDuration: 2000,
          itemStyle: {
            normal: {
              color: "#9b0157"
            }
          },
          lineStyle: {
            normal: {
              color: "#9b0157",
              width: 3
            }
          },
          data: [30, 25, 74, 143, 93, 100, 135]
        }
      ]
    };
    return options;
  }

  static dataDettaglioAndamentoAnnualeOrganico() {
    //andamento annuale organico
    let options = [
      {
        name: "Uomini",
        type: "line",
        symbol: "circle",
        symbolSize: 10,
        smooth: true,
        animationDuration: 2000,
        itemStyle: {
          normal: {
            color: "#01579b"
          }
        },
        lineStyle: {
          normal: {
            width: 3
          }
        },
        data: [10, 40, 74, 83, 120, 146, 180]
      },
      {
        name: "Donne",
        type: "line",
        symbol: "circle",
        symbolSize: 10,
        smooth: true,
        animationDuration: 2000,
        itemStyle: {
          normal: {
            color: "#9b0157"
          }
        },
        lineStyle: {
          normal: {
            color: "#9b0157",
            width: 3
          }
        },
        data: [30, 25, 74, 143, 93, 100, 135]
      }
    ];

    return options;
  }
}
