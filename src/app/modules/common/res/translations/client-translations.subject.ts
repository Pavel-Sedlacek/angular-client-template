import {Language} from "./language.enum";
import {FlashMessagesService} from "../../services/flash-messages.service";
import {ClientSettingsService} from "../../services/client-settings.service";
import {CookieService} from "../../services/cookie.service";
import {BehaviorSubject} from "rxjs";
import {FlashMessageStatus} from "../flash_messages/flashMessageStatus.enum";

export class ClientTranslationsSubject {

  constructor(private readonly flash_messages: FlashMessagesService, private readonly client_settings: ClientSettingsService, private readonly cookies: CookieService) {
    this.translations_subject.subscribe(
      s => {
        this.current_lang = s
      }, e => {
        this.flash_messages.push(
          {
            status: FlashMessageStatus.ERROR,
            text: {
              postfix: 'ERROR',
              heading: 'Translations',
              text: 'Something went wrong while retrieving selected language'
            },
            timout: client_settings.defaultNotificationDuration,
            actions: []
          }
        )
      }
    )
  }

  translations_subject = new BehaviorSubject<Language>(Language.ENG);
  current_lang: Language = Language.ENG

  switch(lang: Language) {
    this.translations_subject.next(lang)
  }

}
