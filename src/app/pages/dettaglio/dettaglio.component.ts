import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./../componenti/dialog/dialog.component";

declare var echarts;

declare var $;
@Component({
  selector: "app-dettaglio",
  templateUrl: "./dettaglio.component.html",
  styleUrls: ["./dettaglio.component.scss"]
})
export class DettaglioComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  myChart: any;
  myChart2: any;
  myChart3: any;
  myChart4: any;
  ngOnInit() {
    //echarts

    this.myChart = echarts.init(document.getElementById("istoCategoria"));
    this.myChart2 = echarts.init(document.getElementById("istoQualifica"));
    this.myChart3 = echarts.init(document.getElementById("istoDip"));
    this.myChart4 = echarts.init(document.getElementById("istoAnnuale"));
    console.log(this.myChart);

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
    this.myChart.setOption(option);

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
    option.series[0].itemStyle.color = "#5fe693";
    option.series[0].data = [10, 2, 16, 9];
    this.myChart2.setOption(option);

    option.series[0].itemStyle.color = "#f2b53f";
    option.series[0].data = [3, 22, 7, 14];
    this.myChart3.setOption(option);

    var color = [
      "#c23531",
      "#2f4554",
      "#61a0a8",
      "#d48265",
      "#91c7ae",
      "#749f83",
      "#ca8622",
      "#bda29a",
      "#6e7074",
      "#546570",
      "#c4ccd3"
    ];

    this.myChart4.setOption(options);

    $(window).on("resize", () => {
      console.log("resize");
      this.myChart.resize();
      this.myChart2.resize();
      this.myChart3.resize();
      this.myChart4.resize();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "550px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
