
import { ApplicationModelService } from '../model/application-model';
import { Injectable } from '@angular/core';
import { EventDispatcherService } from '../service/event-dispatcher.service';
import { OnInit } from '@angular/core';
import { ApplicationEvent } from '../utils/application-event';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../view/componenti/dialog/dialog.component';
import { FilterComponent } from 'src/app/view/componenti/filter/filter.component';


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

            if (event.message == ApplicationEvent.FILTER_HEADER_UOT_ERROR) {

                this.openGenericDialog(this.applicationModel.messageUOTselect);
            }

        });
    }

    private openGenericDialog(message: any = null) {

        message == null ? message = this.applicationModel.messageInfo : null;

        const dialogRef = this.dialog.open(DialogComponent, {
            width: "850px",
            data: { message: message, titolo: "Attenzione: " }
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
