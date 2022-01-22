import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Themes} from "../../../res/theming/theme.enum";
import {ThemeStyles} from "../../../styles/styles.values";

@Component({
  selector: 'template-single-file',
  templateUrl: './single-file.component.html',
  styleUrls: ['./single-file.component.scss']
})
export class SingleFileComponent {

  @Input() theme: ThemeStyles = 'primary';

  @Input() file?: File
  @Output() fileChange = new EventEmitter<File | undefined>();

  constructor() { }

  updateFile(): void {
    this.fileChange.emit()
  }
}
