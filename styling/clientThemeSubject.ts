export class ClientThemeSubject {
  private lastTheme: Themes = Themes.LIGHT;

  constructor(private readonly flashMessages: FlashMessagesService, private readonly clientSettings: ClientSettingsService, private readonly cookies: CookieService) {
    this.themeSubject.next(this.cookies.getCookie({name: CookieService.COOKIES.THEME.name}) ?? CookieService.COOKIES.THEME.default_value ?? Themes.LIGHT);
    this.themeSubject.subscribe(
      s => {
        this.lastTheme = s;
        this.cookies.setCookie({name: CookieService.COOKIES.THEME.name, value: s, expiry: {hours: 744}})
        if (s === Themes.LIGHT) {
          document.body.classList.remove('bg-background-dark');
          document.body.classList.add('bg-background');
        } else {
          document.body.classList.remove('bg-background');
          document.body.classList.add('bg-background-dark');
        }
      }, e => {
        this.flashMessages.push({
          status: FlashMessageStatus.ERROR,
          text: {text: 'Error while updating them', heading: 'Theme', postfix: 'ERROR'},
          actions: [],
          timout: clientSettings.defaultNotificationDuration
        });
      }
    )
  }

  themeSubject = new BehaviorSubject<Themes>(Themes.LIGHT);

  next(theme: Themes) {
    this.themeSubject.next(theme);
  }

  switch() {
    if (this.lastTheme === Themes.LIGHT) this.next(Themes.DARK)
    else this.next(Themes.LIGHT)
  }
}
