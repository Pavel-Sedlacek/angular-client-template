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
import { SingleFileComponent } from './components/forms/single-file/single-file.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { ModalComponent } from './components/modal/modal.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FlashMessagesComponent,
    ThemeDirective,
    RoutableLinkComponent,
    ExternalLinkComponent,
    SingleFileComponent,
    TranslatePipe,
    ModalComponent
  ],
    exports: [
        FooterComponent,
        NavbarComponent,
        FlashMessagesComponent,
        ThemeDirective,
        SingleFileComponent,
        TranslatePipe,
        ModalComponent
    ],
    imports: [
        AngularCommonModule,
        RouterModule,
        FontAwesomeModule,
        FormsModule
    ]
})
export class CommonModule { }
