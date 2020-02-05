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
import { ModalController } from './controller/ModalController';
import { ApplicationModelService } from './service/application-model.service';

import it from '@angular/common/locales/it';

//registeerd local ita
registerLocaleData(it);


function getBaseUrl() {
  let hostname = window.location.href;

  console.log("valutazione APP_BASE_HREF | hostname: " + hostname);

  let APP_BASE_HREF = "/";

  if (hostname.includes("oraclecloud.com")) {
    APP_BASE_HREF = "/analytics/saw.dll?Dashboard&PortalPath=%2Fshared%2Fprove%2F_portal%2Ftest_integrazione_angular&pag=/";
  }
  return APP_BASE_HREF;
}
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
    AppComponent,

  ],

  providers: [
    { provide: APP_BASE_HREF, useFactory: getBaseUrl },//useValue: "/analytics/saw.dll?Dashboard&PortalPath=%2Fshared%2Fprove%2F_portal%2Ftest_integrazione_angular&pag=/" },
    { provide: LOCALE_ID, useValue: "it-IT" },
    ModalController
  ],

  bootstrap: [AppComponent],
  //for runtime component
  entryComponents: [DialogComponent, FilterComponent]
})


export class AppModule {

  hostname = "";
  constructor(private modal: ModalController, private applicationModel: ApplicationModelService) {
    this.hostname = window.location.href;

    console.log("checking baseUrl...");

    if (this.hostname.includes("oraclecloud.com")) {
      this.applicationModel.baseUrl = applicationModel.baseUrlOracleCloud;

    } else {
      this.applicationModel.baseUrl = applicationModel.baseUrlStandard;
    }

  }



}


