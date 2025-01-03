import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  showBurgerNav() {
    document.getElementById('burger-nav')?.classList.toggle('mobile-nav');
    document.getElementById('background')?.classList.toggle('mobile-nav');
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    if (language == 'de') {
      this.highlightBtnDE();
    } else if (language == 'en') {
      this.hightlightBtnEN();
    }
  }

  highlightBtnDE() {
    document.getElementById('de-btn-m')?.classList.remove('inactive');
    document.getElementById('de-btn')?.classList.remove('inactive');
    document.getElementById('de-btn-m')?.classList.add('active');
    document.getElementById('de-btn')?.classList.add('active');
    document.getElementById('en-btn-m')?.classList.add('inactive');
    document.getElementById('en-btn')?.classList.add('inactive');
    document.getElementById('en-btn-m')?.classList.remove('active');
    document.getElementById('en-btn')?.classList.remove('active');
  }

  hightlightBtnEN() {
    document.getElementById('en-btn-m')?.classList.remove('inactive');
    document.getElementById('en-btn')?.classList.remove('inactive');
    document.getElementById('en-btn-m')?.classList.add('active');
    document.getElementById('en-btn')?.classList.add('active');
    document.getElementById('de-btn-m')?.classList.add('inactive');
    document.getElementById('de-btn')?.classList.add('inactive');
    document.getElementById('de-btn-m')?.classList.remove('active');
    document.getElementById('de-btn')?.classList.remove('active');
  }
}
