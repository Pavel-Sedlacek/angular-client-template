import {Component, Input, OnInit} from '@angular/core';
import {RouteReference} from "../../../res/routing/link-reference.interface";

@Component({
  selector: 'template-external-link',
  templateUrl: './external-link.component.html',
  styleUrls: ['./external-link.component.scss']
})
export class ExternalLinkComponent implements OnInit {

  @Input() link: RouteReference | undefined

  constructor() {
  }

  ngOnInit(): void {
  }
}
