import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  exports: [HeaderComponent, SidebarComponent]
})
export class LayoutModule {
  constructor() {
    //low level code :)
  }
}
