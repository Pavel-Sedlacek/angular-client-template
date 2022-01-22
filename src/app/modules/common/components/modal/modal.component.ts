import {
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ModalPosition} from "../../res/modal/modal-position.values";
import {ModalSize} from "../../res/modal/modal-size.values";
import {ModalCloseOption} from "../../res/modal/modal-close-option.values";
import {PageClickService} from "../../services/page-click.service";
import {faTimes,} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'template-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() visible: boolean = true;

  @Input() header: string = '';
  @Input() position: ModalPosition = 'center';
  @Input() size: ModalSize = 'medium';
  @Input() closable: ModalCloseOption[] = [];

  @Output() visibleChange = new EventEmitter<boolean>()

  @ViewChild('modal') element_ref?: ElementRef;
  readonly fa_close = faTimes;

  constructor(
    private readonly page_click: PageClickService
  ) {

  }

  ngOnInit(): void {
    if (this.closable.includes('click_out')) {
      this.page_click.click.subscribe(
        s => {
          if (!this.element_ref?.nativeElement.contains(s.target)) {
            this.visibleChange.emit(false);
            this.visible = false;
          }
        }
      )
    }
  }
}
