import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ClientSettingsService} from "../services/client-settings.service";
import {FlashMessagesService} from "../services/flash-messages.service";
import {FlashMessageStatus} from "../res/flash_messages/flashMessageStatus.enum";
import {Themes} from "../res/theming/theme.enum";

@Directive({
  selector: '[templateTheme]'
})
export class ThemeDirective implements OnInit {

  @Input() light?: string;
  @Input() dark?: string;

  private darkStyles: string[] = [];
  private lightStyles: string[] = [];

  constructor(private elementRef: ElementRef, private readonly clientSettings: ClientSettingsService, private readonly flashMessages: FlashMessagesService) {
  }

  private removeStyles = (theme: Themes) => {
    let x: string[] = [];
    switch (theme) {
      case Themes.DARK: {
        x = this.lightStyles;
        break;
      }
      case Themes.LIGHT: {
        x = this.darkStyles;
        break;
      }
    }
    x.forEach(it => {
      this.elementRef.nativeElement.classList.remove(it)
    })
  }

  private applyStyles = (theme: Themes) => {
    let x: string[] = [];
    switch (theme) {
      case Themes.DARK: {
        x = this.darkStyles;
        break;
      }
      case Themes.LIGHT: {
        x = this.lightStyles;
        break;
      }
    }
    x.forEach(it => {
      this.elementRef.nativeElement.classList.add(it)
    })
  }

  ngOnInit(): void {
    if (this.light === undefined) {
      if (this.dark !== undefined) {
        this.darkStyles = this.dark?.trim().split(" ") ?? [];
      }
    } else {
      this.lightStyles = this.light?.trim().split(" ") ?? [];
      if (this.dark !== undefined) this.darkStyles = this.dark?.trim().split(" ") ?? [];
    }

    this.clientSettings.theme.themeSubject.subscribe(
      s => {
        this.removeStyles(s)
        this.applyStyles(s)
      },
      e => {
        this.flashMessages.last_notification.next({
          actions: [],
          status: FlashMessageStatus.ERROR,
          text: {text: 'Error while loading themes!', postfix: 'ERROR', heading: 'Themes'},
          timout: {millis: 6000}
        });
      }
    )
  }
}
