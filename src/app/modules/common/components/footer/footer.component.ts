import {Component, OnInit} from '@angular/core';
import {faEnvelope, faGem, faHome, faPhone} from '@fortawesome/free-solid-svg-icons';
import {RoutingService} from "../../services/routing.service";
import {ExternalLinkReference} from "../../res/routing/external-link-reference.interface";

@Component({
  selector: 'template-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  readonly faHome = faHome;
  readonly faEnvelope = faEnvelope;
  readonly faPhone = faPhone;
  readonly faGem = faGem;

  constructor(private readonly routingService: RoutingService) {
  }

  ngOnInit(): void {
  }

  socialLinks(): ExternalLinkReference[] {
    return RoutingService.SOCIAL_MEDIA_LINKS
  }
}
