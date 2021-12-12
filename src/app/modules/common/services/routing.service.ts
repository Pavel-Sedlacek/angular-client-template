import {Injectable} from '@angular/core';
import {RouteReference} from "../res/routing/link-reference.interface";
import {ExternalLinkReference} from "../res/routing/external-link-reference.interface";

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  static readonly NAVBAR_LINKS: RouteReference[] = [
    {title: 'Home', link: ''},
    {title: 'Test', link: 'test'}
  ]
  static readonly SOCIAL_MEDIA_LINKS: ExternalLinkReference[] = [
    {title: 'Github', link: 'https://www.github.com'}
  ]

  private selected: RouteReference | undefined

  constructor() {
  }

  select(link: RouteReference | undefined): void {
    this.selected = link;
  }

  isSelected(link: RouteReference | undefined): boolean {
    if (link === undefined) return false
    return this.selected === link;
  }
}

