import {Component} from '@angular/core';
import {ClientSettingsService} from "./modules/common/services/client-settings.service";
import {FlashMessagesService} from "./modules/common/services/flesh_messages/flash-messages.service";
import {FlashMessageStatus} from "./modules/common/services/flesh_messages/flashMessageStatus.enum";
import {ActionStatus} from "./modules/common/services/action/action-status.enum";
import {Themes} from "./modules/common/services/theming/theme.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected readonly clientSettings: ClientSettingsService, private readonly flashMessages: FlashMessagesService) {
    this.clientSettings.title.subject.subscribe(
      s => this.title = s,
      e => this.flashMessages.last_notification.next({
        status: FlashMessageStatus.WARNING,
        text: {text: 'error loading title', heading: 'Title', postfix: 'ERROR'},
        timout: {millis: 8000},
        actions: []
      })
    )
  }

  title = '';

  readonly OK_STATUS: FlashMessageStatus = FlashMessageStatus.OK;
  readonly SUCCESS_STATUS: FlashMessageStatus = FlashMessageStatus.SUCCESS;
  readonly WARNING_STATUS: FlashMessageStatus = FlashMessageStatus.WARNING;
  readonly ERROR_STATUS: FlashMessageStatus = FlashMessageStatus.ERROR;
  readonly INFO_STATUS: FlashMessageStatus = FlashMessageStatus.INFO;

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
}
