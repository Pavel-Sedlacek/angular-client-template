export class TranslatePipe implements PipeTransform {

  constructor(private readonly translations: TranslateService) {
  }

  transform(key: string): Observable<string> {
    return this.translations.get(key)
  }

}
