import {BehaviorSubject} from "rxjs";

export class ClientTitleSubject {
  constructor(template: string) {
    this.push(template)
  }

  readonly subject = new BehaviorSubject('')

  push(title: string) {
    this.subject.next(title);
  }
}
