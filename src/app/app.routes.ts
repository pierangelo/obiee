import { Routes } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { TestComponent } from "./pages/test/test.component";
import { ComponentiComponent } from "./pages/componenti/componenti.component";

export const AppRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "test", component: TestComponent },
  { path: "componenti", component: ComponentiComponent },
  { path: "**", component: DashboardComponent }
];
