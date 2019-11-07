import { Routes } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TestComponent } from "./pages/test/test.component";
import { ComponentiComponent } from "./pages/componenti/componenti.component";
import { OverviewComponent } from "./pages/overview/overview.component";
import { PeopleComponent } from "./pages/people/people.component";

export const AppRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "overview", component: OverviewComponent },
  { path: "people", component: PeopleComponent },
  { path: "componenti", component: ComponentiComponent },
  { path: "**", component: DashboardComponent }
];
