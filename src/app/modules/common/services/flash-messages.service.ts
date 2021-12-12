import {Injectable} from '@angular/core';
import {FlashMessage} from "../res/flash_messages/flashMessage.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {
  last_notification = new BehaviorSubject<FlashMessage | undefined>(undefined)

  push(notification: FlashMessage): void {
    this.last_notification.next(notification)
  }
}
