import {Injectable} from '@angular/core';
import {ClientTitleSubject} from "../res/title/client-title.subject";
import {ClientThemeSubject} from "../res/theming/clientThemeSubject";
import {TimeWrapper} from "../res/models/time.wrapper";
import {FlashMessagesService} from "./flash-messages.service";
import {CookieService} from "./cookie.service";
import {SessionToken} from "../res/session/session-token.class";

@Injectable({
  providedIn: 'root'
})
export class ClientSettingsService {

  readonly title = new ClientTitleSubject('Template', this.flashMessages)
  readonly theme = new ClientThemeSubject(this.flashMessages, this, this.cookies)
  readonly defaultNotificationDuration: TimeWrapper = {millis: 2000}
  session_token = new SessionToken(this.cookies.getCookie({name: CookieService.COOKIES.USER_TOKEN.name}) ?? CookieService.COOKIES.USER_TOKEN.default_value)

  constructor(private readonly flashMessages: FlashMessagesService, private readonly cookies: CookieService) {
  }
}

