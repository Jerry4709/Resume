import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('resume');

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'th']);
    this.translate.setDefaultLang('en');
    
    // Load from localStorage or default to 'en'
    const savedLang = localStorage.getItem('appLang') || 'en';
    this.translate.use(savedLang);

    // Save to localStorage when language changes
    this.translate.onLangChange.subscribe((event) => {
      localStorage.setItem('appLang', event.lang);
    });
  }
}
