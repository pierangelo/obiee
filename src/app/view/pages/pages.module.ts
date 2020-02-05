import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../material.module";

import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";

import { OverviewComponent } from "./overview/overview.component";
import { PeopleComponent } from "./people/people.component";
import { Page403Component } from "./page403/page403.component";
import { DialogComponent } from "../componenti/dialog/dialog.component";
import { DettaglioComponent } from "./dettaglio-people/dettaglio.component";
import { FilterComponent } from "../componenti/filter/filter.component";
import { DettaglioScolaritaComponent } from "./dettaglio-scolarita/dettaglio-scolarita.component";
import { DettaglioAnzianitaComponent } from "./dettaglio-anzianita/dettaglio-anzianita.component";
import { ScolaritaComponent } from "./people/scolarita/scolarita.component";
import { PeopleModule } from "./people/people.module";

@NgModule({
  imports: [PeopleModule],
  exports: [],
  declarations: []
})
export class PagesModule {
  //add pages here :)
  static PAGES = [
    DashboardComponent,
    TestComponent,

    OverviewComponent,
    // PeopleComponent,
    Page403Component,
    DettaglioComponent,
    FilterComponent,
    DialogComponent,
    DettaglioScolaritaComponent,
    DettaglioAnzianitaComponent
  ];
}
