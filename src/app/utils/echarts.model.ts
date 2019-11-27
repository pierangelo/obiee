export class EchartsModel {
  constructor() { }

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
        type: "value",
        scale: true
      },
      yAxis: {
        axisLabel: {
          fontSize: 10
        },
        data: ["CGIL", "UGL", "CISL", "UIL", "ASSIVOLO"]
      },
      series: [
        {
          name: "",
          type: "bar",

          label: {
            normal: {
              formatter: function (d) {
                return d.value;
              },
              fontSize: "12",
              show: true,
              position: "right"
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
        width: "92%",
        left: "1%",
        right: "5%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10,
        },
        data: ["CGIL", "UGL", "CISL", "UIL", "ASSIVOLO"]
      },
      series: [
        {
          name: "",
          type: "bar",
          tooltip: {},
          label: {
            normal: {
              formatter: function (d) {
                return d.value.toLocaleString();
              },
              fontSize: "13",
              fontWeight: "bold",
              show: true,
              position: "right"
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
      tooltip: {

      },
      legend: {
        show: false,
        data: ["存活", "死亡"],

      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "value",

        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      yAxis: {
        type: "category",
        data: [""],
        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      series: [
        {
          name: "Uomini",
          type: "bar",
          tooltip: {
            formatter: function (d) {

              return 'Uomini <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#01579b;"></span>' + d.value.toLocaleString("it-IT");
            },
          },
          label: {
            normal: {
              formatter: function (d) {

                return "Uomini: " + d.value.toLocaleString("it-IT");
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
          tooltip: {
            formatter: function (d) {

              return 'Donne <br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#9b0157;"></span>' + d.value.toLocaleString("it-IT");
            },
          },
          label: {
            normal: {
              formatter: function (d) {
                return "Donne: " + d.value.toLocaleString("it-IT");;
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

  static optionPeopleScolarita() {
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
        type: "value",
        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      yAxis: {
        data: ["CGIL", "UGL", "CISL", "UIL", "ASSIVOLO"],
        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      series: [
        {
          name: "CGIL",
          type: "bar",

          label: {
            normal: {
              formatter: function (d) {
                return d.value.toLocaleString("it-IT");;
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

  static optionDettaglioAnzianitaIstoCategoria() {
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

  static optionDettaglioAnzianitaAndamentoAnnuale() {
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

  static dataDettaglioAnzianitaAndamentoAnnuale() {
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


  static optionDettaglioIstoCategoria() {
    var option = {
      title: {
        text: ""
      },
      grid: {
        width: "80%",
        left: "3%",
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
        type: "value",
        scale: true,
        axisLabel: {
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      yAxis: {
        axisLabel: {
          fontSize: 10
        },
        data: ["CAT1", "CAT2", "CAT3", "CAT4"]
      },

      series: [
        {
          name: "",
          type: "bar",
          itemStyle: {
            color: "#5fd3e6"
          },
          label: {
            show: true,
            fontSize: "13",
            fontWeight: "bold",
            formatter: function (data) {
              return data.value.toLocaleString("it-IT");
            },
            position: "right"

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
        data: ["M", "F"]
      },
      title: {
        text: ""
      },
      tooltip: {
        trigger: "axis",
        padding: [2, 10],
        textStyle: {
          fontSize: 16
        },
        formatter: function (params, ticket, callback) {
          var tooltip = params[0].name + "<br>";
          for (var i = 0; i < params.length; i++) {

            var color = "";
            if (i == 0) {
              //uomini
              color = "#0b3766";
            } else {
              color = "#9b0157";
            }

            tooltip +=
              '<span style="text-align:center;display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + '"></span>';
            tooltip += params[i].seriesName + ": " + params[i].value.toLocaleString() +
              "<br>";

          }
          return tooltip;
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
        data: ["2015", "2016", "2017", "2018", "2019"]
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
        name: "",
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
          formatter: function (d) {
            return d.toLocaleString("it-IT");
          }
        },
      },
      series: [
        {
          name: "M",
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
          name: "F",
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
        name: "M",
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
        name: "F",
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


  //////////////////////////////////////////////////////////////////////////////////////////
  //
  //    new graph


  static optionPictiorialChart() {

    let symbols = [
      'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
      'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
      'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
    ];
    let bodyMax = 100; //指定图形界限的值
    let labelSetting = {
      normal: {
        show: true,
        position: 'bottom',
        offset: [0, 10],
        formatter: function (param) {
          return (param.value / bodyMax * 100).toFixed(0) + '%';
        },
        textStyle: {
          fontSize: 18,
          fontFamily: 'Arial',
          color: '#686868'
        }
      }
    };

    let markLineSetting = { //设置标线
      symbol: 'none',
      lineStyle: {
        normal: {
          opacity: 0.8
        }
      },
      data: [{
        type: 'max',
        label: {
          normal: {
            formatter: 'max: {c}'
          }
        }
      }, {
        type: 'min',
        label: {
          normal: {
            formatter: 'min: {c}'
          }
        }
      }]
    };


    let option = {
      tooltip: {
        show: false, //鼠标放上去显示悬浮数据
      },
      legend: {
        show: false,
        data: ['typeA', 'typeB'],
        selectedMode: 'single',
        itemWidth: 10, //图例的宽度
        itemHeight: 10, //图例的高度
        itemGap: 30,
        orient: 'horizontal',
        left: 'center',
        top: '20px',
        icon: 'rect',
        // selectedMode: false, //取消图例上的点击事件
        textStyle: {
          color: '#808492'
        },
      },
      grid: {
        left: '6%',
        right: '10%',
        width: "90%",
        top: '20%',
        bottom: '20%',
        containLabel: true
      },
      xAxis: {
        data: ['a', 'x', 'b'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        max: bodyMax,
        splitLine: {
          show: false
        },
        axisTick: {
          // 刻度线
          show: false
        },
        axisLine: {
          // 轴线
          show: false
        },
        axisLabel: {
          // 轴坐标文字
          show: false
        }
      },
      series: [{
        name: 'typeA',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        data: [{
          //uomini
          value: 65,
          symbol: symbols[0],
          itemStyle: {
            normal: {
              color: '#00305A'//'#0b3766'//'rgba(105,204,230)' //单独控制颜色
            }
          },
        },
        {

        },
        { //donne
          value: 35,
          symbol: symbols[1],
          itemStyle: {
            normal: {
              color: '#9b0157'//'rgba(255,130,130)' //单独控制颜色
            }
          },
        }
        ],
        //markLine: markLineSetting,
        z: 10
      },
      {
        name: 'typeB',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        label: labelSetting,
        data: [{
          value: 70,
          symbol: symbols[0]
        },
        {},
        {
          value: 30,
          symbol: symbols[1]
        }
        ],
        //markLine: markLineSetting,
        z: 10
      },
      {
        // 设置背景底色，不同的情况用这个
        name: 'full',
        type: 'pictorialBar', //异型柱状图 图片、SVG PathData
        symbolBoundingData: bodyMax,
        animationDuration: 0,
        itemStyle: {
          normal: {
            color: '#ccc' //设置全部颜色，统一设置
          }
        },
        z: 10,
        data: [{
          itemStyle: {
            normal: {
              color: 'rgba(105,204,230,0.40)' //单独控制颜色
            }
          },
          value: 100,
          symbol: symbols[0]
        },
        {
          // 设置中间冒号
          itemStyle: {
            normal: {
              color: '#1DA1F2' //单独控制颜色
            }
          },
          value: 100,
          symbol: symbols[2],
          symbolSize: [0, '18%'],
          symbolOffset: [0, '-200%']
        },
        {
          itemStyle: {
            normal: {
              color: 'rgba(255,130,130,0.40)' //单独控制颜色
            }
          },
          value: 100,
          symbol: symbols[1]
        }
        ]
      }
      ]
    }

    return option;
  }//pictionalChart
}
