import { Component, OnInit } from '@angular/core';
import {faEnvelope, faGem, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
