import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [],
  exports: []
})
export class AppLayoutModule {
  static COMPONENTS = [HeaderComponent, SidebarComponent];
  constructor() {
    //low level code :)
  }
}
