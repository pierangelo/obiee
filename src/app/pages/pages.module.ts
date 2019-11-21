import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { ComponentiComponent } from "./componenti/componenti.component";
import { OverviewComponent } from "./overview/overview.component";
import { PeopleComponent } from "./people/people.component";
import { Page403Component } from "./page403/page403.component";
import { DialogComponent } from "./componenti/dialog/dialog.component";
import { DettaglioComponent } from "./dettaglio/dettaglio.component";
import { FilterComponent } from "./componenti/filter/filter.component";
import { DettaglioScolaritaComponent } from "./dettaglio-scolarita/dettaglio-scolarita.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [],
  declarations: []
})
export class PagesModule {
  //add pages here :)
  static PAGES = [
    DashboardComponent,
    TestComponent,
    ComponentiComponent,
    OverviewComponent,
    PeopleComponent,
    Page403Component,
    DettaglioComponent,
    FilterComponent,
    DialogComponent,
    DettaglioScolaritaComponent
  ];
}
