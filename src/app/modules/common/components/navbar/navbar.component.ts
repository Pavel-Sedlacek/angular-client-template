import {Component, OnInit} from '@angular/core';
import {ClientSettingsService} from "../../services/client-settings.service";
import {faLanguage, faMoon} from '@fortawesome/free-solid-svg-icons';
import {RouteReference} from "../../res/routing/link-reference.interface";
import {RoutingService} from "../../services/routing.service";
import {Language, Languages} from "../../res/translations/language.enum";
import {TranslateService} from "../../services/translate.service";

@Component({
  selector: 'template-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly clientSettings: ClientSettingsService, private readonly translate_service: TranslateService) {
  }

  ngOnInit(): void {
  }

  readonly fa_moon = faMoon;
  readonly fa_language = faLanguage;
  select_lang: boolean = false;
  languages = Languages;

  navbarRoutes(): RouteReference[] {
    return RoutingService.NAVBAR_LINKS
  }

  switchTheme() {
    this.clientSettings.theme.switch()
  }

  select_language(language: Language) {
    this.clientSettings.translation.switch(language)
  }
}
