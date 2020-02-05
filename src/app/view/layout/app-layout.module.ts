import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from "../../material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],

  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent]
})
export class AppLayoutModule {
  constructor() {
    //low level code :)
  }
}
