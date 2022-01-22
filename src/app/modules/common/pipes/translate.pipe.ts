import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from "rxjs";
import {TranslateService} from "../services/translate.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private readonly translations: TranslateService) {
  }

  transform(key: string): Observable<string> {
    return this.translations.get(key)
  }

}
