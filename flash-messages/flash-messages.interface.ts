export interface FlashMessage {
    status: FlashMessageStatus
    text: FlashMessageContent
    actions: FlashMessagesActions[]
    timout: number
}