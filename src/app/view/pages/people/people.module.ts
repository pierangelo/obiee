import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PeopleComponent } from "./people.component";
import { MaterialModule } from "src/app/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ScolaritaComponent } from "./scolarita/scolarita.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [ScolaritaComponent],
  declarations: [PeopleComponent, ScolaritaComponent]
})
export class PeopleModule {}
