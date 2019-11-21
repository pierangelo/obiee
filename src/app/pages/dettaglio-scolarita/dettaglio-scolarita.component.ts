import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DettaglioService } from "./../../service/dettaglio.service";
import { EventDispatcherService } from "./../../service/event-dispatcher.service";
import { ApplicationModelService } from "src/app/service/application-model.service";
import { DialogComponent } from "./../componenti/dialog/dialog.component";
import { EchartsModel } from "src/app/utils/echarts.model";
import { EchartsController } from "./../../controller/echarts.controller";

declare var $;
declare var echarts;

@Component({
  selector: "app-dettaglio-scolarita",
  templateUrl: "./dettaglio-scolarita.component.html",
  styleUrls: ["./dettaglio-scolarita.component.scss"]
})
export class DettaglioScolaritaComponent implements OnInit {
  ngOnInit(): void {}
}
