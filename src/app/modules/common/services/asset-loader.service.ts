import {Injectable} from '@angular/core';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AssetLoaderService {
  private readonly path = './../../../../assets/'
  private readonly config_path = './config/'
  private readonly image_path = './image/'
  private readonly template_path = './template/'

  constructor() {
  }

  load_config<T>(filename: string): T {
    return require(this.config_reference(filename))
  }

  config_reference(filename: string): string {
    return `${this.path}${this.config_path}${filename}.json`
  }

  load_image(filename: string, file_extension: string): string {
    return fs.readFileSync(this.image_reference(filename, file_extension), 'utf-8')
  }

  image_reference(filename: string, file_extension: string): string {
    return `${this.path}${this.image_path}${filename}.${file_extension}`
  }

  load_template(filename: string): string {
    return fs.readFileSync(this.template_reference(filename), 'utf-8')
  }

  template_reference(filename: string): string {
    return `${this.path}${this.template_path}${filename}.html`
  }
}
