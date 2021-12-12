export class SessionToken {
  constructor(private token: string | undefined) {
  }

  isDefined = (): boolean => this.token !== undefined && this.token.length !== 0

}
