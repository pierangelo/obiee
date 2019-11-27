import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";
import { RouterModule, Router } from "@angular/router";
import { MatNativeDateModule, MatDialogModule } from "@angular/material";

import { AppComponent } from "./app.component";

import { LayoutModule } from "@angular/cdk/layout";

import { AppRoutes } from "./app.routes";
import { PagesModule } from "./pages/pages.module";
import { APP_BASE_HREF, registerLocaleData } from "@angular/common";
import { AppLayoutModule } from "./layout/app-layout.module";
import { DialogComponent } from "./pages/componenti/dialog/dialog.component";
import { FilterComponent } from "./pages/componenti/filter/filter.component";
import { LOCALE_ID } from '@angular/core';

import it from '@angular/common/locales/it';

//registeerd local ita
registerLocaleData(it);


declare var $;

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: "top" }),
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppLayoutModule,
    PagesModule
  ],
  declarations: [
    //trick ;)
    AppLayoutModule.COMPONENTS,
    PagesModule.PAGES,
    AppComponent
  ],

  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LOCALE_ID, useValue: "it-IT" }],
  bootstrap: [AppComponent],
  //for runtime component
  entryComponents: [DialogComponent, FilterComponent]
})
export class AppModule { }
