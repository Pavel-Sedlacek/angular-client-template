import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Language} from "../res/translations/language.enum";
import {ClientSettingsService} from "./client-settings.service";
import {HttpClient} from "@angular/common/http";
import {LanguageTranslations} from "../res/translations/lang-translations.interface";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(
    private readonly client_settings: ClientSettingsService,
    private readonly http_client: HttpClient
  ) {
    this.cache.set(Language.ENG, new Map())
    this.cache.get(Language.ENG)?.set('template.home.lmao', 'lmao xD')
    this.cache.set(Language.CZ, new Map())
    this.cache.get(Language.CZ)?.set('template.home.lmao', 'lmao bruh')
    this.client_settings.translation.translations_subject.subscribe(
      s => {
        (this.http_client.get(this.translation_endpoint + this.client_settings.translation.current_lang) as Observable<LanguageTranslations>)
          .subscribe(
            s => {
              this.cache.set(s.language, new Map())
              for (const i of s.translations) this.cache.get(s.language)!.set(i.key, i.value)
            }
          )
      }
    )
  }

  private cache: Map<Language, Map<string, string>> = new Map()
  private readonly translation_endpoint: string = 'api/translations/';

  get(key: string): Observable<string> {
    let value = this.cache.get(this.client_settings.translation.current_lang)?.get(key) ?? undefined
    if (value) return of(value)
    console.info(`translation for ${key} in ${this.client_settings.translation.current_lang} is not available!`)
    return of(key)
  }
}
