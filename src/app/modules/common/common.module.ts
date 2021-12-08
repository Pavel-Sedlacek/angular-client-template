import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FlashMessagesComponent } from './components/flash-messages/flash-messages.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FlashMessagesComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    FlashMessagesComponent
  ],
  imports: [
    AngularCommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CommonModule { }
