
import { ApplicationModelService } from './../service/application-model.service';
import { Injectable } from '@angular/core';
import { EventDispatcherService } from './../service/event-dispatcher.service';
import { OnInit } from '@angular/core';
import { ApplicationEvent } from './../utils/application-event';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './../pages/componenti/dialog/dialog.component';
import { FilterComponent } from 'src/app/pages/componenti/filter/filter.component';


@Injectable({
    providedIn: "root"
})
export class ModalController {

    constructor(public applicationModel: ApplicationModelService, public dispatcher: EventDispatcherService, public dialog: MatDialog) {

        console.log("ModalController on");
        this.dispatcher.broadcastListener.subscribe((event: ApplicationEvent) => {

            console.log(event);
            if (event.message == ApplicationEvent.FILTER_HEADER_SEND_ERROR) {
                this.openGenericDialog();
            }//error


            if (event.message == ApplicationEvent.FILTER_OPEN) {
                this.openFilterDialog();
            }

        });
    }



    private openGenericDialog() {

        const dialogRef = this.dialog.open(DialogComponent, {
            width: "850px",
            data: { message: this.applicationModel.messageInfo, titolo: "Attenzione: " }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("The dialog was closed");

        });
    }


    private openFilterDialog() {
        const dialogRef2 = this.dialog.open(FilterComponent, {
            width: "1050px",
            height: "600px"
            // data: {name:this.name, animal: this.animal}
        });

        dialogRef2.afterClosed().subscribe(result => {
            console.log("The dialog was closed");
        });
    }

}
