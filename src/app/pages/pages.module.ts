import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TestComponent } from "./test/test.component";
import { ComponentiComponent } from "./componenti/componenti.component";
import { OverviewComponent } from "./overview/overview.component";
import { PeopleComponent } from "./people/people.component";

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
    PeopleComponent
  ];
}
