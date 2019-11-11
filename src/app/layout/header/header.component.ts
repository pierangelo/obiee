import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./../../pages/componenti/dialog/dialog.component";
import { FilterComponent } from "src/app/pages/componenti/filter/filter.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input("sidenav") sidenav;
  constructor(public dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(FilterComponent, {
      width: "850px",
      height: "600px"
      // data: {name:this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
