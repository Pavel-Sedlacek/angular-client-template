import {Injectable} from '@angular/core';
import {FlashMessage} from "./flashMessage.interface";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {
  last_notification = new BehaviorSubject<FlashMessage | undefined>(undefined)
}
