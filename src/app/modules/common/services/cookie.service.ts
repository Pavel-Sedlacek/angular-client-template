import {Injectable} from '@angular/core';
import {Cookie} from "../res/cookie/cookie.interface";
import {JSONParserService} from "./jsonparser.service";
import {Themes} from "../res/theming/theme.enum";
import {CookieAccess} from "../res/cookie/cookie-access.interface";
import {CookiePath} from "../res/cookie/cookie-path.interface";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  static COOKIES = {
    CONSENT: {name: 'cookie-consent', default_value: false} as CookiePath<boolean>,
    USER_TOKEN: {name: 'user-session-token', default_value: undefined} as CookiePath<string>,
    THEME: {name: 'client-theme', default_value: Themes.LIGHT} as CookiePath<Themes>
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
