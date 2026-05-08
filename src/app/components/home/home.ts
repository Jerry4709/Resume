import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

declare const VANTA: any;
declare const gsap: any;
declare const ScrollTrigger: any;
declare const confetti: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements AfterViewInit {
  totalVisitors: number = 0;
  dailyVisitors: number = 0;

  constructor(private translate: TranslateService) {}
  
  ngAfterViewInit() {
    this.initVanta();
    this.initThemeToggle();
    this.initProfilePic();
    this.initGsap();
    this.initConsoleOverlay();
    this.initKonami();
    this.initVisitorCounter();
  }

  private initVanta() {
    if (typeof VANTA !== 'undefined') {
      VANTA.NET({
        el: '#vantaBg',
        mouseControls: true,
        touchControls: true,
        color: 0x61dafb,
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--bg')
      });
    }
  }

  private initThemeToggle() {
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      const icon = toggleBtn.firstElementChild as HTMLElement;
      toggleBtn.addEventListener('click', () => {
        const light = document.documentElement.getAttribute('data-theme') === 'light';
        document.documentElement.setAttribute('data-theme', light ? 'dark' : 'light');
        if (icon) icon.className = light ? 'bx bx-sun' : 'bx bx-moon';
      });
    }
  }

  private initProfilePic() {
    const pPic = document.querySelector('.profile-pic');
    if (pPic) {
      pPic.addEventListener('click', () => {
        pPic.classList.toggle('flip');
        if (typeof confetti !== 'undefined') {
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.3 } });
        }
      });
    }
  }

  private initGsap() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const navLinks = document.querySelectorAll('nav a');
      const setActive = (id: string) => navLinks.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      gsap.utils.toArray('section').forEach((sec: any) => {
        ScrollTrigger.create({
          trigger: sec, start: 'top center', end: 'bottom center',
          onToggle: (s: any) => s.isActive && setActive(sec.id)
        });
      });
    }
  }

  private initConsoleOverlay() {
    const overlay = document.getElementById('consoleOverlay');
    const input = document.getElementById('consoleInput') as HTMLInputElement;
    const output = document.getElementById('consoleOutput');
    const cmds: any = {
      help: "Available commands: help, about, credits, clear",
      about: "Hi! I'm Wachira – full‑stack dev who loves Easter eggs.",
      credits: "Built with ❤ & JS. Confetti by canvas‑confetti.",
      secret: "You found the secret command! 🎉"
    };
    
    if (!overlay || !input || !output) return;

    const write = (txt: string) => output.textContent += `\n$ ${txt}`;
    
    document.addEventListener('keydown', (e) => {
      if (e.key === '`' && e.target !== input) {
        overlay.style.display = overlay.style.display === 'flex' ? 'none' : 'flex';
        input.focus();
      }
    });
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        input.value = '';
        if (!val) return;
        write(val);
        if (val === 'clear') {
          output.textContent = '';
        } else {
          write(cmds[val] ?? 'command not found');
        }
        output.scrollTop = output.scrollHeight;
      }
      if (e.key === 'Escape') overlay.style.display = 'none';
    });
  }

  private initKonami() {
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    let k = 0;
    document.addEventListener('keydown', (e) => {
      k = (e.key === konami[k]) ? k + 1 : 0;
      if (k === konami.length) {
        this.matrixBurst();
        k = 0;
      }
    });
  }

  private matrixBurst() {
    if (typeof confetti !== 'undefined') {
      for (let i = 0; i < 400; i++) {
        confetti({
          particleCount: 1, angle: Math.random() * 360,
          spread: 360, startVelocity: 90,
          colors: ['#0f0', '#0c0']
        });
      }
    }
  }

  private initVisitorCounter() {
    const namespace = 'wachira_resume_2026';
    const today = new Date().toISOString().split('T')[0];

    // Fetch total visitors
    fetch(`https://api.counterapi.dev/v1/${namespace}/visitors/up`)
      .then(res => res.json())
      .then(data => this.totalVisitors = data.count)
      .catch(err => console.error('Error fetching total visitors', err));

    // Fetch daily visitors
    fetch(`https://api.counterapi.dev/v1/${namespace}/visitors_daily_${today}/up`)
      .then(res => res.json())
      .then(data => this.dailyVisitors = data.count)
      .catch(err => console.error('Error fetching daily visitors', err));
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
