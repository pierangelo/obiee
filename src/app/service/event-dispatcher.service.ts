import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ApplicationEvent } from "./../utils/application-event";

@Injectable({
  providedIn: "root"
})
export class EventDispatcherService {
  private _broadcastListener: Subject<any> = new Subject<any>();
  broadcastListener = this._broadcastListener.asObservable();

  constructor() { }

  /**
   * distribuisce l'evento 
   * @param event 
   */
  dispatchEvent(event: ApplicationEvent): void {
    this._broadcastListener.next(event);
    console.log(
      "EventDispatcherService - sending broadcast message: " + event.message
    );
  }

  getListener() {
    return this.broadcastListener.pipe();
  }
  destroyListener() {
    this._broadcastListener.unsubscribe();
  }
}
