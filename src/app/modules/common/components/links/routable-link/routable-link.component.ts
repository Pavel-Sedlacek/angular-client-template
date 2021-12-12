import {Component, Input, OnInit} from '@angular/core';
import {RouteReference} from "../../../res/routing/link-reference.interface";
import {RoutingService} from "../../../services/routing.service";

@Component({
  selector: 'template-routable-link',
  templateUrl: './routable-link.component.html',
  styleUrls: ['./routable-link.component.scss']
})
export class RoutableLinkComponent implements OnInit {

  @Input() link: RouteReference | undefined

  constructor(private readonly routingService: RoutingService) {
  }

  ngOnInit(): void {
  }

  select() {
    this.routingService.select(this.link)
  }

  isSelected(): boolean {
    return this.routingService.isSelected(this.link)
  }
}
