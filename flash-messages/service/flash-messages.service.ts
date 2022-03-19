export class FlashMessagesService {
    last_notification = new BehaviorSubject<FlashMessage | undefined>(undefined)

    push(notification: FlashMessage): void {
        this.last_notification.next(notification)
    }
}