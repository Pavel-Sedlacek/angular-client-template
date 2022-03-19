export class ClientSettingsService {

  readonly title = new ClientTitleSubject('Template', this.flashMessages)
  readonly theme = new ClientThemeSubject(this.flashMessages, this, this.cookies)
  readonly translation = new ClientTranslationsSubject(this.flashMessages, this, this.cookies)

  readonly defaultNotificationDuration: TimeWrapper = {millis: 2000}

  session_token = new SessionToken(this.cookies.getCookie({name: CookieService.COOKIES.USER_TOKEN.name}) ?? CookieService.COOKIES.USER_TOKEN.default_value)

  constructor(private readonly flashMessages: FlashMessagesService, private readonly cookies: CookieService) {
  }
}

