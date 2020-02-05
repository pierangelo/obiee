import { PeopleComponent } from "./view/pages/people/people.component";
import { Routes } from "@angular/router";

import { DashboardComponent } from "./view/pages/dashboard/dashboard.component";
import { TestComponent } from "./view/pages/test/test.component";
import { OverviewComponent } from "./view/pages/overview/overview.component";
import { Page403Component } from "./view/pages/page403/page403.component";
import { DettaglioComponent } from "./view/pages/dettaglio-people/dettaglio.component";
import { DettaglioScolaritaComponent } from "./view/pages/dettaglio-scolarita/dettaglio-scolarita.component";
import { DettaglioAnzianitaComponent } from "./view/pages/dettaglio-anzianita/dettaglio-anzianita.component";

export const AppRoutes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "overview", component: Page403Component },
  { path: "people", component: PeopleComponent },
  { path: "dettaglio", component: DettaglioComponent },
  { path: "dettaglio-scolarita", component: Page403Component },
  { path: "dettaglio-anzianita", component: Page403Component },
  { path: "**", component: Page403Component }
];
