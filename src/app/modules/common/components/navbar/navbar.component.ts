import { Component, OnInit } from '@angular/core';
import {Themes} from "../../services/theming/theme.enum";
import {ClientSettingsService} from "../../services/client-settings.service";
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'template-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly clientSettings: ClientSettingsService) { }

  ngOnInit(): void {
  }

  readonly LIGHT_THEME = Themes.LIGHT
  readonly DARK_THEME = Themes.DARK
  readonly faMoon = faMoon;

  switchTheme() {
    this.clientSettings.theme.switch()
  }

}
