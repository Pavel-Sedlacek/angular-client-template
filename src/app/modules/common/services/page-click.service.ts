import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageClickService {

  constructor() { }

  click = new Subject<Event>();
}
