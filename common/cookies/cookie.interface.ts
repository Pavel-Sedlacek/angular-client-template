export interface Cookie<T> {
  name: string,
  value: T,
  expiry: CookieExpiration
}
