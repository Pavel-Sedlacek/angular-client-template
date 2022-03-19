export class JSONParserService {

  constructor() {
  }

  parseObject = <T>(object: string): T => JSON.parse(object) as unknown as T

  encode = (value: any): string => JSON.stringify(value)
}
