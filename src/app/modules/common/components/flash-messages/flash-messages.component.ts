import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "../../services/flesh_messages/flash-messages.service";
import {FlashMessage} from "../../services/flesh_messages/flashMessage.interface";
import {FlashMessageStatus} from "../../services/flesh_messages/flashMessageStatus.enum";
import {NumberRangePicker} from "../../services/util/range-locker.math";
import {faBookmark, faCheck, faExclamation, faInfo, faTimes} from "@fortawesome/free-solid-svg-icons";
import {ActionStatus} from "../../services/action/action-status.enum";

@Component({
  selector: 'template-flash-messages',
  templateUrl: './flash-messages.component.html',
  styleUrls: ['./flash-messages.component.scss']
})
export class FlashMessagesComponent implements OnInit {

  private messages: Map<number, FlashMessage> = new Map()
  private readonly idLocker = new NumberRangePicker(0, 99)

  readonly error = faTimes;
  readonly success = faCheck;
  readonly warning = faExclamation;
  readonly info = faInfo;
  readonly ok = faBookmark;

  readonly OK_FLASH_STATUS: FlashMessageStatus = FlashMessageStatus.OK;
  readonly SUCCESS_FLASH_STATUS: FlashMessageStatus = FlashMessageStatus.SUCCESS;
  readonly WARNING_FLASH_STATUS: FlashMessageStatus = FlashMessageStatus.WARNING;
  readonly ERROR_FLASH_STATUS: FlashMessageStatus = FlashMessageStatus.ERROR;
  readonly INFO_FLASH_STATUS: FlashMessageStatus = FlashMessageStatus.INFO;

  readonly OK_ACTION_STATUS: ActionStatus = ActionStatus.OK;
  readonly SUCCESS_ACTION_STATUS: ActionStatus = ActionStatus.SUCCESS;
  readonly WARNING_ACTION_STATUS: ActionStatus = ActionStatus.WARNING;
  readonly ERROR_ACTION_STATUS: ActionStatus = ActionStatus.ERROR;
  readonly INFO_ACTION_STATUS: ActionStatus = ActionStatus.INFO;

  constructor(private readonly flashMessages: FlashMessagesService) {
    this.flashMessages.last_notification.subscribe(
      s => {
        if (s !== undefined) {
          this.addNotification(s)
        }
      },
      e => this.addNotification({
        status: FlashMessageStatus.ERROR,
        text: {text: 'Error while creating flash message', heading: 'Flash', postfix: 'ERROR'},
        timout: {millis: 10000},
        actions: []
      })
    )
  }

  getMessages(): [number, FlashMessage][] {
    return [...this.messages]
  }

  ngOnInit(): void {
  }

  private addNotification(s: FlashMessage) {
    let x = this.idLocker.lock()
    this.messages.set(x, s)
    setTimeout(() => {
      this.messages.delete(x)
      this.idLocker.release(x)
    }, s.timout.millis)
  }

  close(index: number) {
    console.debug(this.messages)
    console.debug(index)
    this.messages.delete(index)
  }
}
