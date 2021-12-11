import {Injectable} from '@angular/core';
import {FlashMessage} from "./flashMessage.interface";
import {BehaviorSubject, Subject} from "rxjs";
import {not} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {
  last_notification = new BehaviorSubject<FlashMessage | undefined>(undefined)

  push(notification: FlashMessage): void {
    this.last_notification.next(notification)
  }
}
