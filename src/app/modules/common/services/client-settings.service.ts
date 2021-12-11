import {Injectable} from '@angular/core';
import {ClientTitleSubject} from "./title/client-title.subject";
import {Themes} from "./theming/theme.enum";
import {BehaviorSubject} from "rxjs";
import {ClientThemeSubject} from "./theming/clientThemeSubject";
import {TimeWrapper} from "./models/time.wrapper";
import {FlashMessagesService} from "./flesh_messages/flash-messages.service";

@Injectable({
  providedIn: 'root'
})
export class ClientSettingsService {

  readonly title = new ClientTitleSubject('Template')
  readonly theme = new ClientThemeSubject(this.flashMessages, this)
  readonly defaultNotificationDuration: TimeWrapper = {millis: 2000}

  constructor(private readonly flashMessages: FlashMessagesService) {
  }
}

