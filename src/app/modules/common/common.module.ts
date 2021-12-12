import {NgModule} from '@angular/core';
import {CommonModule as AngularCommonModule} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FlashMessagesComponent} from './components/flash-messages/flash-messages.component';
import {ThemeDirective} from './directives/theme.directive';
import {RoutableLinkComponent} from './components/links/routable-link/routable-link.component';
import {ExternalLinkComponent} from './components/links/external-link/external-link.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FlashMessagesComponent,
    ThemeDirective,
    RoutableLinkComponent,
    ExternalLinkComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    FlashMessagesComponent,
    ThemeDirective
  ],
  imports: [
    AngularCommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CommonModule { }
