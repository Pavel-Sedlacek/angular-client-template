import {Component, OnInit} from '@angular/core';
import {ClientSettingsService} from "../../services/client-settings.service";
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {RouteReference} from "../../res/routing/link-reference.interface";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'template-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly clientSettings: ClientSettingsService) {
  }

  ngOnInit(): void {
  }

  readonly faMoon = faMoon;

  navbarRoutes(): RouteReference[] {
    return RoutingService.NAVBAR_LINKS
  }

  switchTheme() {
    this.clientSettings.theme.switch()
  }

}
