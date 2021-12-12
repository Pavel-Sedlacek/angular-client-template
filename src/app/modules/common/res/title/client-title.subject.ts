import {BehaviorSubject} from "rxjs";
import {FlashMessageStatus} from "../flash_messages/flashMessageStatus.enum";
import {FlashMessagesService} from "../../services/flash-messages.service";

export class ClientTitleSubject {
  constructor(template: string, private readonly flashMessages: FlashMessagesService) {
    this.subject.subscribe(
      s => {
        document.title = s
      },
      e => this.flashMessages.last_notification.next({
        status: FlashMessageStatus.WARNING,
        text: {text: 'error loading title', heading: 'Title', postfix: 'ERROR'},
        timout: {millis: 8000},
        actions: []
      })
    )
    this.push(template)
  }

  readonly subject = new BehaviorSubject('')

  push(title: string) {
    this.subject.next(title);
  }
}
