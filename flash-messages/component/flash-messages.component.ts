export class FlashMessagesComponent {

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

    readonly OK_ACTION_STATUS: FlashMessagesActionStatus = FlashMessagesActionStatus.OK;
    readonly SUCCESS_ACTION_STATUS: FlashMessagesActionStatus = FlashMessagesActionStatus.SUCCESS;
    readonly WARNING_ACTION_STATUS: FlashMessagesActionStatus = FlashMessagesActionStatus.WARNING;
    readonly ERROR_ACTION_STATUS: FlashMessagesActionStatus = FlashMessagesActionStatus.ERROR;
    readonly INFO_ACTION_STATUS: FlashMessagesActionStatus = FlashMessagesActionStatus.INFO;

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
                timout: 10000,
                actions: []
            })
        )
    }

    getMessages(): [number, FlashMessage][] {
        return [...this.messages]
    }

    private addNotification(s: FlashMessage) {
        let x = this.idLocker.lock()
        this.messages.set(x, s)
        setTimeout(() => {
            this.messages.delete(x)
            this.idLocker.release(x)
        }, s.timout)
    }

    close(index: number) {
        console.debug(this.messages)
        console.debug(index)
        this.messages.delete(index)
    }
}