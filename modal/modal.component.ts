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