import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../componenti/dialog/dialog.component";
import { EchartsController } from "src/app/controller/echarts.controller";
import { PeopleService } from "./../../service/people.service";
import { EchartsModel } from "src/app/utils/echarts.model";
import { ApplicationModelService } from "./../../service/application-model.service";
import { EventDispatcherService } from "./../../service/event-dispatcher.service";
import { empty } from "rxjs";

declare var echarts;
declare var d3;
declare var $;
@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"]
})
export class PeopleComponent implements OnInit {
  mode = new FormControl("over");
  name = "";
  animal = "";
  option: any;
  option2: any;

  myChart: any;
  myChart2: any;

  //valori del grafico d3.UominiDonne
  myVar = {
    groups: [
      { name: "Donne", value: 50, total: "50%" },
      { name: "Uomini", value: 50, total: "50%" }
    ]
  };

  constructor(
    public dialog: MatDialog,
    public peopleService: PeopleService,
    public applicationModel: ApplicationModelService,
    public eventDispatcher: EventDispatcherService
  ) {
    eventDispatcher.broadcastListener.subscribe((event: any) => {
      console.log(event);
      this.resetData();
      this.loadData();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "550px",
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }

  loadData() {
    this.option = EchartsModel.optionPeopleDipendentiInForza();
    this.peopleService.getDipendentiInForza(this.myChart, this.option);

    this.option2 = EchartsModel.optionPeopleSindacati();
    this.peopleService.getSindacati(this.myChart2, this.option2);

    //secondo grafico
    var svg = $("#svganchor").empty();
    this.drawGraficoUominiDonne(this.myVar);
  }

  resetData() {
    this.option.series[0].data = [];
    this.myChart.setOption(this.option);
    this.option2.series[0].data = [];
    this.option2.series[1].data = [];
    this.myChart2.setOption(this.option2);
  }

  ngOnInit() {} // ngOninit

  ngAfterViewInit() {
    //dipendenti forza
    this.myChart = echarts.init(document.getElementById("pie-chart"));
    console.log(this.myChart);

    //sindacati : secondo chart

    this.myChart2 = echarts.init(document.getElementById("histoMashiFemmine"));

    this.loadData();
    //hanlder
    $(window).on("resize", () => {
      console.log("resize");
      this.myChart.resize();
      this.myChart2.resize();
    });
  } //ngAfterViewInit

  //
  // Private Methods
  //

  private drawGraficoUominiDonne(myVar: any) {
    var totalData = [
      {
        criterion: "Distribuzione di Genere",
        description: "Maschi vs Femmine",
        groups: [
          {
            name: "Maschi",
            value: 50.43
          },
          {
            name: "Femmine",
            value: 49.57
          }
        ]
      }
    ];

    for (var i = 0, len = myVar.groups.length; i < len; i++) {
      let d = myVar.groups[i];
      if (d.name == "F") d.name = "Donne";
      else if (d.name == "M") d.name = "Uomini";
    }
    totalData[0].groups = myVar.groups;

    var headPath =
      "M251.249,127.907c17.7,0,32.781-6.232,45.254-18.7c12.467-12.467,18.699-27.554,18.699-45.253 c0-17.705-6.232-32.783-18.699-45.255C284.029,6.233,268.948,0,251.249,0c-17.705,0-32.79,6.23-45.254,18.699 c-12.465,12.469-18.699,27.55-18.699,45.255c0,17.703,6.23,32.789,18.699,45.253C218.462,121.671,233.549,127.907,251.249,127.907 z";

    var bodyPath =
      "M381.438,153.029c-10.663-10.657-23.599-15.987-38.827-15.987H159.889c-15.23,0-28.171,5.327-38.831,15.987 c-10.657,10.66-15.987,23.604-15.987,38.831v118.776c0,7.611,2.663,14.079,7.993,19.407s11.803,7.994,19.414,7.994 c7.614,0,14.087-2.666,19.417-7.994c5.327-5.328,7.994-11.796,7.994-19.407V210.134h18.271v260.379 c0,8.754,3.144,16.275,9.423,22.559c6.28,6.276,13.796,9.418,22.554,9.418s16.278-3.142,22.557-9.418 c6.28-6.283,9.42-13.802,9.42-22.559V338.038h18.27V470.52c0,8.75,3.141,16.275,9.421,22.552 c6.279,6.283,13.802,9.425,22.556,9.425c8.76,0,16.279-3.142,22.559-9.425c6.283-6.283,9.418-13.798,9.418-22.552V210.134h18.274 v100.495c0,7.618,2.665,14.086,7.994,19.411c5.328,5.331,11.799,7.994,19.41,7.994c7.61,0,14.093-2.663,19.417-7.994 c5.328-5.325,7.994-11.793,7.994-19.411V191.86C397.43,176.63,392.095,163.689,381.438,153.029z";

    var criterionListData = totalData.map(d => d.criterion);

    var divList = d3.select("#controler");

    var criterionList = divList
      .selectAll(".criterionList")
      .data(criterionListData)
      .enter()
      .append("p")
      .attr("class", "criterionList");

    criterionList.text(d => d);

    var width = 390,
      height = 365;

    var svg = d3
      .select("#svganchor")
      .append("svg")
      .classed("svg-content-responsive", false)
      .attr("width", width)
      .attr("height", height)
      .call(this.responsivefy); // tada!

    var padding = [10, 10, 10, 10];

    var xScale = d3
      .scalePoint()
      .range([padding[3], width - padding[1]])
      .padding(0.5);

    var barScale = d3
      .scaleLinear()
      .range([padding[3], width - padding[1]])
      .domain([0, 100]);

    //var colorScale = d3.scaleOrdinal()
    //	.range(['#e7298a','#3d89b6','#1b9e77','#d95f02','#66a61e']);
    var colorScale = d3
      .scaleOrdinal()
      .domain(["Uomini", "Donne"])
      .range(["#01579b", "#9b0157"]);

    var dataNodes = d3.range(100).map(() => ({ id: "", xPosition: "" }));

    var simulation = d3
      .forceSimulation()
      .force("collide", d3.forceCollide(12))
      .force("x", d3.forceX(d => d.xPosition).strength(0.2))
      .force("y", d3.forceY(height / 2))
      .velocityDecay(0.7);

    //var preciseNumberTitle = svg.append("text")
    //	.attr("class", "preciseNumberTitle")
    //	.attr("y", 424)
    //	.attr("x", padding[3])
    //	.text("N:");

    draw("Distribuzione di Genere");

    function draw(criterion) {
      var filteredData = totalData.filter(d => d.criterion === criterion);

      xScale.domain(filteredData[0].groups.map(d => d.name));

      //colorScale.domain(filteredData[0].groups.map(d => d.name));

      var counterData = 0;

      filteredData[0].groups.forEach(d => {
        var rounded = Math.round(d.value);
        for (var i = counterData; i < rounded + counterData; i++) {
          dataNodes[i].id = d.name;
          dataNodes[i].xPosition = xScale(d.name);
        }
        counterData += rounded;
      });

      var nodes = svg
        .selectAll(".g")
        .data(dataNodes)
        .enter()
        .append("g");

      nodes.attr("fill", d => colorScale(d.id));

      nodes
        .append("path")
        .attr("d", headPath)
        .attr("transform", "translate(-12,0) scale(0.045,0.045)");

      nodes
        .append("path")
        .attr("d", bodyPath)
        .attr("transform", "translate(-12,0) scale(0.045,0.045)");

      var nodesData = svg
        .selectAll(".nodesData")
        .data(filteredData[0].groups, d => d.name)
        .enter()
        .append("text")
        .attr("class", "nodesData")
        .attr("text-anchor", "middle")
        .attr("y", 60)
        .attr("x", d => xScale(d.name))
        .text(d => d.name)
        .append("tspan")
        .attr("y", 115)
        .attr("x", d => xScale(d.name) + 10)
        .attr("class", "nodesDataSpan")
        .text(d => d.total);

      dataNodes.forEach(d => {
        d.x = width / 2;
        d.y = height / 2;
      });

      simulation.nodes(dataNodes).on("tick", tick);

      function tick() {
        nodes.attr("transform", d => {
          if (d.y < 160) {
            d.y = 160;
          }
          if (d.y > 480) {
            d.y = 480;
          }
          return "translate(" + d.x + "," + d.y + ")";
        });
      }

      function redraw(criterion) {
        var filteredData = totalData.filter(d => d.criterion === criterion);

        //chartSubTitle.text(filteredData[0].description);

        xScale.domain(filteredData[0].groups.map(d => d.name));

        //colorScale.domain(filteredData[0].groups.map(d => d.name));

        var counterData = 0;

        filteredData[0].groups.forEach(d => {
          var rounded = Math.round(d.value);
          for (var i = counterData; i < rounded + counterData; i++) {
            dataNodes[i].id = d.name;
            dataNodes[i].xPosition = xScale(d.name);
          }
          counterData += rounded;
        });

        nodes
          .transition()
          .duration(500)
          .attr("fill", d => colorScale(d.id));

        var newNodesData = svg
          .selectAll(".nodesData")
          .data(filteredData[0].groups, d => d.name + d.value);

        var newNodesDataExit = newNodesData.exit().remove();

        var newNodesDataEnter = newNodesData
          .enter()
          .append("text")
          .attr("class", "nodesData")
          .attr("text-anchor", "middle")
          .attr("y", 100)
          .attr("x", d => xScale(d.name))
          .text(d => d.name + ": ")
          .append("tspan")
          .attr("class", "nodesDataSpan")
          .text(d => Math.round(d.value));

        var newNodesDataPrecise = svg
          .selectAll(".nodesDataPrecise")
          .data(filteredData[0].groups, d => d.name + d.value);

        newNodesDataPrecise
          .exit()
          .transition()
          .delay(750)
          .duration(10)
          .remove();

        newNodesDataPrecise
          .enter()
          .append("text")
          .attr("class", "nodesDataPrecise")
          .attr("text-anchor", "middle")
          .attr("y", 440)
          .attr("x", d => xScale(d.name))
          .transition()
          .delay(750)
          .duration(10)
          .text(d => d.name + ": " + d.value + "%");

        var bars = svg.selectAll(".bars").data(filteredData[0].groups);

        var barExit = bars
          .exit()
          .transition()
          .delay(750)
          .duration(500)
          .attr("x", width - padding[1])
          .attr("width", 0)
          .remove();

        var barsEnter = bars
          .enter()
          .append("rect")
          .attr("class", "bars")
          .attr("x", width - padding[1])
          .merge(bars)
          .attr("y", 470)
          .attr("height", 20);

        barsEnter
          .transition()
          .delay(750)
          .duration(500)
          .attr("x", (d, i) => {
            if (i === 0) {
              return barScale(0);
            } else {
              var counter = 0;
              for (var j = 0; j < i; j++) {
                counter += filteredData[0].groups[j].value;
              }
              return barScale(counter);
            }
          })
          .attr("width", d => barScale(d.value) - padding[3])
          .attr("fill", d => colorScale(d.name));

        var polylines = svg
          .selectAll(".polylines")
          .data(filteredData[0].groups);

        var polylinesExit = polylines
          .exit()
          .transition()
          .delay(750)
          .duration(500)
          .attr(
            "points",
            "" +
              width +
              ",470 " +
              width +
              ",458 " +
              width +
              ",458 " +
              width +
              ",446"
          )
          .remove();

        var polylinesEnter = polylines
          .enter()
          .append("polyline")
          .attr("class", "polylines")
          .attr(
            "points",
            "" +
              width +
              ",470 " +
              width +
              ",458 " +
              width +
              ",458 " +
              width +
              ",446"
          )
          .merge(polylines)
          .transition()
          .delay(750)
          .duration(500)
          .attr("points", (d, i) => {
            if (i === 0) {
              return (
                "" +
                (barScale(0) + barScale(filteredData[0].groups[0].value) / 2) +
                ",470 " +
                (barScale(0) + barScale(filteredData[0].groups[0].value) / 2) +
                ",458 " +
                xScale(d.name) +
                ",458 " +
                xScale(d.name) +
                ",446"
              );
            } else {
              var counter = 0;
              for (var j = 0; j < i; j++) {
                counter += filteredData[0].groups[j].value;
              }
              var thisWidth = barScale(counter);
              return (
                "" +
                (thisWidth + (barScale(d.value) - padding[3]) / 2) +
                ",470 " +
                (thisWidth + (barScale(d.value) - padding[3]) / 2) +
                ",458 " +
                xScale(d.name) +
                ",458 " +
                xScale(d.name) +
                ",446"
              );
            }
          })
          .attr("stroke-width", 1)
          .attr("fill", "none")
          .attr("stroke", "darkslategray");

        setTimeout(function() {
          simulation.nodes(dataNodes);
          simulation.alpha(0.8).restart();
        }, 750);

        //end of redraw
      }

      d3.selectAll(".criterionList").on("click", function(d) {
        redraw(d);
      });

      //end of draw
    }
  } //drawUominiDonne

  private responsivefy(svg) {
    // container will be the DOM element
    // that the svg is appended to
    // we then measure the container
    // and find its aspect ratio
    const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style("width"), 10),
      height = parseInt(svg.style("height"), 10),
      aspect = width / height;

    // set viewBox attribute to the initial size
    // control scaling with preserveAspectRatio
    // resize svg on inital page load
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMinYMid")
      .call(resize);

    // add a listener so the chart will be resized
    // when the window resizes
    // multiple listeners for the same event type
    // requires a namespace, i.e., 'click.foo'
    // api docs: https://goo.gl/F3ZCFr
    d3.select(window).on("resize." + container.attr("id"), resize);

    // this is the code that resizes the chart
    // it will be called on load
    // and in response to window resizes
    // gets the width of the container
    // and resizes the svg to fill it
    // while maintaining a consistent aspect ratio
    function resize() {
      const w = parseInt(container.style("width"));
      svg.attr("width", w - 100);
      svg.attr("height", Math.round(w / aspect));
    }
  } //responsivefy
}