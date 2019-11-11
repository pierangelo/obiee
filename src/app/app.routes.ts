import { Routes } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TestComponent } from "./pages/test/test.component";
import { ComponentiComponent } from "./pages/componenti/componenti.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { PeopleComponent } from "./pages/people/people.component";
import { Page403Component } from "./pages/page403/page403.component";
import { DettaglioComponent } from "./pages/dettaglio/dettaglio.component";

export const AppRoutes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "overview", component: Page403Component },
  { path: "people", component: PeopleComponent },
  { path: "componenti", component: ComponentiComponent },
  { path: "dettaglio", component: DettaglioComponent },
  { path: "**", component: Page403Component }
];
