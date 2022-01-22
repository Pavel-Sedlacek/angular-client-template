import {Component, HostListener} from '@angular/core';
import {ClientSettingsService} from "./modules/common/services/client-settings.service";
import {FlashMessagesService} from "./modules/common/services/flash-messages.service";
import {FlashMessageStatus} from "./modules/common/res/flash_messages/flashMessageStatus.enum";
import {ActionStatus} from "./modules/common/res/action/action-status.enum";
import {CookieService} from "./modules/common/services/cookie.service";
import {TimeWrapper} from "./modules/common/res/models/time.wrapper";
import {RoutingService} from "./modules/common/services/routing.service";
import {FileTransferService} from "./modules/common/services/file-transfer.service";
import {Language} from "./modules/common/res/translations/language.enum";
import {PageClickService} from "./modules/common/services/page-click.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  file?: File;
  visible = true;

  constructor(
    protected readonly clientSettings: ClientSettingsService,
    private readonly flashMessages: FlashMessagesService,
    private readonly cookieService: CookieService,
    private readonly routing: RoutingService,
    private readonly fts: FileTransferService,
    private readonly page_click: PageClickService
  ) {
  }

  @HostListener('document:click', ['$event'])
  public onPageClick(event: Event) {
    this.page_click.click.next(event)
  };

  ft(): void {
    this.fts.upload_file('xD', {dataName: 'f', file: this.file??new File([],'') }, {xD: 2, bruh: 2})
  }
}
