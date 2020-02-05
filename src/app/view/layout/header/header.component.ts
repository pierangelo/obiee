import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../../componenti/dialog/dialog.component";
import { FilterComponent } from "src/app/view/componenti/filter/filter.component";
import { EventDispatcherService } from "../../../service/event-dispatcher.service";
import { ApplicationEvent } from "src/app/utils/application-event";
import { ApplicationModelService } from "src/app/model/application-model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input("sidenav") sidenav;
  constructor(
    public dialog: MatDialog,
    public dispatcher: EventDispatcherService,
    public appliactionModel: ApplicationModelService
  ) {}

  ngOnInit() {}

  clickBtn() {
    this.sidenav.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "550px"
      // data: {name:this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  openDialogFilter(): void {
    this.dispatcher.dispatchEvent(
      new ApplicationEvent(ApplicationEvent.FILTER_OPEN)
    );
  }
}
