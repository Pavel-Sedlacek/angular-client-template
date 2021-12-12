import {CookieExpiration} from "./cookie-expiration.interface";

export interface Cookie<T> {
  name: string,
  value: T,
  expiry: CookieExpiration
}
