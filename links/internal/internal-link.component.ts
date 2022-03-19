export class RoutableLinkComponent {

    @Input() link: Link | undefined

    constructor(private readonly routingService: RoutingService) {
    }

    select() {
        this.routingService.select(this.link)
    }

    isSelected(): boolean {
        return this.routingService.isSelected(this.link)
    }
}