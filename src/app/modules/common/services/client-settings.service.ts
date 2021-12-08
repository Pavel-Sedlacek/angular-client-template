import { Injectable } from '@angular/core';
import {ClientTitleSubject} from "./title/client-title.subject";

@Injectable({
  providedIn: 'root'
})
export class ClientSettingsService {

  readonly title = new ClientTitleSubject('Template')

  constructor() { }
}
