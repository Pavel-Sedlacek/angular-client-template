import {Component} from '@angular/core';
import {ClientSettingsService} from "./modules/common/services/client-settings.service";
import {FlashMessagesService} from "./modules/common/services/flash-messages.service";
import {FlashMessageStatus} from "./modules/common/res/flash_messages/flashMessageStatus.enum";
import {ActionStatus} from "./modules/common/res/action/action-status.enum";
import {CookieService} from "./modules/common/services/cookie.service";
import {TimeWrapper} from "./modules/common/res/models/time.wrapper";
import {RoutingService} from "./modules/common/services/routing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly OK_STATUS: FlashMessageStatus = FlashMessageStatus.OK;
  readonly SUCCESS_STATUS: FlashMessageStatus = FlashMessageStatus.SUCCESS;
  readonly WARNING_STATUS: FlashMessageStatus = FlashMessageStatus.WARNING;
  readonly ERROR_STATUS: FlashMessageStatus = FlashMessageStatus.ERROR;
  readonly INFO_STATUS: FlashMessageStatus = FlashMessageStatus.INFO;

  constructor(protected readonly clientSettings: ClientSettingsService, private readonly flashMessages: FlashMessagesService, private readonly cookieService: CookieService, private readonly routing: RoutingService) {
  }


  flash(status: FlashMessageStatus) {
    this.flashMessages.last_notification.next({
      status: status,
      text: {text: 'jej the flash message component is working', heading: 'Jej', postfix: 'OK'},
      timout: {millis: 522000},
      actions: [
        {
          status: ActionStatus.INFO, onClick: $event => {
            this.flash(this.OK_STATUS)
          }, title: 'bruh'
        },
        {
          status: ActionStatus.WARNING, onClick: $event => {
            this.flash(this.OK_STATUS)
          }, title: 'bruh'
        }
      ]
    })
  }

  getCookies() {
    console.debug(
      this.cookieService.getCookie<TimeWrapper>({name: 'bruh'}));
  }

  setCookies() {
    this.cookieService.setCookie({name: 'bruh', expiry: {hours: 2}, value: {millis: 1241}})
  }

  deleteCookies() {
    this.cookieService.deleteCookie({name: 'bruh'})
  }
}
