export class RoutingService {

    static readonly NAVBAR_LINKS: Link[] = [
        {title: 'Home', link: ''}
    ]
    static readonly SOCIAL_MEDIA_LINKS: Link[] = [
        {title: 'Github', link: 'https://www.github.com'}
    ]

    private selected: Link | undefined

    constructor() {
    }

    select(link: Link | undefined): void {
        this.selected = link;
    }

    isSelected(link: Link | undefined): boolean {
        if (link === undefined) return false
        return this.selected === link;
    }
}