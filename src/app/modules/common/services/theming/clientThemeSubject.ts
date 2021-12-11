import {BehaviorSubject} from "rxjs";
import {Themes} from "./theme.enum";
import {FlashMessagesService} from "../flesh_messages/flash-messages.service";
import {FlashMessageStatus} from "../flesh_messages/flashMessageStatus.enum";
import {ClientSettingsService} from "../client-settings.service";

export class ClientThemeSubject {
  private lastTheme: Themes = Themes.LIGHT;
  constructor(private readonly flashMessages: FlashMessagesService, private readonly clientSettings: ClientSettingsService) {
    this.themeSubject.subscribe(
      s => {
        this.lastTheme = s;
        if (s === Themes.LIGHT) {
          document.body.classList.remove('bg-background-dark');
          document.body.classList.add('bg-background');
        } else {
          document.body.classList.remove('bg-background');
          document.body.classList.add('bg-background-dark');
        }
      }, e => {
        this.flashMessages.push({
          status: FlashMessageStatus.ERROR,
          text: {text: 'Error while updating them', heading: 'Theme', postfix: 'ERROR'},
          actions: [],
          timout: clientSettings.defaultNotificationDuration
        });
      }
    )
  }

  themeSubject = new BehaviorSubject<Themes>(Themes.LIGHT);

  next(theme: Themes) {
    this.themeSubject.next(theme);
  }

  switch() {
    if (this.lastTheme === Themes.LIGHT) this.next(Themes.DARK)
    else this.next(Themes.LIGHT)
  }
}
