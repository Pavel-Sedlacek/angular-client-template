export interface FlashMessagesActions {
    title: string
    status: FlashMessageStatus
    onClick: ($event: Event) => void
}