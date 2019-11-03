import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";
import { MatNativeDateModule } from "@angular/material";

import { AppComponent } from "./app.component";

import { LayoutModule } from "@angular/cdk/layout";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { AppRoutes } from "./app.routes";
import { PagesModule } from "./pages/pages.module";
import { APP_BASE_HREF } from "@angular/common";
import { HeaderComponent } from "./layout/header/header.component";

declare var $;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    LayoutModule,
    PagesModule
  ],
  declarations: [
    //trick ;)
    PagesModule.PAGES,
    AppComponent,
    SidebarComponent,
    HeaderComponent
  ],

  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    //low level code :)
    $("#fs-global-spinner").fadeOut("", () => {
      $("#fs-global-spinner").remove();
    });
  }
}
