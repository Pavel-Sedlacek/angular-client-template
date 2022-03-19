export class CookieService {

  static COOKIES = {
    CONSENT: {name: 'cookie-consent', default_value: false} as CookieVRef<boolean>,
    USER_TOKEN: {name: 'user-session-token', default_value: undefined} as CookieVRef<string>,
    THEME: {name: 'client-theme', default_value: Themes.LIGHT} as CookieVRef<Themes>
  }

  constructor(private readonly jsonParser: JSONParserService) {
  }

  setCookie<T>(cookie: Cookie<T>) {
    const d = new Date();
    d.setTime(d.getTime() + (cookie.expiry.hours * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${cookie.name}=${this.jsonParser.encode(cookie.value)};${expires};path=/;sameSite=Lax`;
  }

  deleteCookie(cookie: CookieAccess) {
    this.setCookie({name: cookie.name, value: undefined, expiry: {hours: -1}});
  }

  getCookie<T>(cookie: CookieAccess): T | undefined {
    let name = cookie.name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return this.jsonParser.parseObject<T>(c.substring(name.length, c.length));
      }
    }
    return undefined;
  }
}
