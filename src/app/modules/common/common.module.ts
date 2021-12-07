import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    AngularCommonModule,
    RouterModule,
    FontAwesomeModule
  ]
})
export class CommonModule { }
