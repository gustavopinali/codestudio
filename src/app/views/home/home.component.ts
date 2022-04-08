import {
  Component,
  OnInit,
  Renderer2,
  OnDestroy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService) {}

  showMobileMenu = false;

  buyUrl = environment.buyUrl;
  adminRoot = environment.adminRoot;

  slideSettings = {
    type: 'carousel',
    gap: 30,
    perView: 4,
    hideNav: true,
    peek: { before: 10, after: 10 },
    breakpoints: {
      600: { perView: 1 },
      992: { perView: 2 },
      1200: { perView: 3 },
    },
  };

  slideItems = [
    {
      icon: 'iconsminds-computer',
      title: 'Aplicações Web',
      detail:
        'Aplicações personalizadas para as necessidades do seu negócio.',
    },
    {
      icon: 'iconsminds-smartphone-3',
      title: 'Aplicações Mobile',
      detail:
        'Aplicativos personalizados para as plataformas Android e IOS.',
    },
    {
      icon: 'iconsminds-monitor-analytics',
      title: 'Ferramentas de Marketing',
      detail:
        'Diversas ferramentas para auxiliar sua empresa com marketing digital.',
    },
    {
      icon: 'iconsminds-optimization',
      title: 'Ferramentas de Automatização',
      detail:
        'Automatizar a execução de suas aplicações para reduzir falhas e melhor desempenho.',
    },
    {
      icon: 'iconsminds-gamepad-2',
      title: 'Desenvolvimento de Jogos/Gamificação',
      detail:
        'Para proporcionar melhor contato e experiencia ao seu cliente.',
    },
    {
      icon: 'iconsminds-server-2',
      title: 'Servidores Cloud',
      detail:
        'Nossos servidores executam suas aplicações em servidores Cloud para melhor desempenho e disponibilidade.',
    }
  ];

  features = [
    {
      title: 'Design Agradável',
      img: '/assets/img/landing-page/features/pleasant-design.png',
      detail:
        'Como desenvolvedor web, gostamos de trabalhar em algo que pareça legal. Não é uma necessidade absoluta, mas realmente nos motiva que o produto final pareça bom para o ponto de vista do usuário. <br /><br />Por isso, trabalhamos muito com cores, ícones, composição e harmonia de design. Componentes temáticos e layouts com a mesma linguagem de design. <br /><br />Mantivemos os princípios de experiência do usuário sempre no centro do processo de design.',
    },
    {
      title: 'Extra Responsive',
      img: '/assets/img/landing-page/features/extra-responsive.png',
      detail:
        'Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens.',
    },
    {
      title: 'Superfine Charts',
      img: '/assets/img/landing-page/features/superfine-charts.png',
      detail:
        'Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful.',
    },
    {
      title: 'Layouts for the Job',
      img: '/assets/img/landing-page/features/layouts-for-the-job.png',
      detail:
        'Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.',
    },
    {
      title: 'Smart Menu',
      img: '/assets/img/landing-page/features/smart-menu.png',
      detail:
        'Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.',
    },
  ];

  layouts = [
    { title: 'Menu Default', img: '/assets/img/landing-page/layouts/menu-default.jpg' },
    { title: 'Menu Subhidden', img: '/assets/img/landing-page/layouts/menu-subhidden.jpg' },
    { title: 'Menu Hidden', img: '/assets/img/landing-page/layouts/menu-hidden.jpg' },
    { title: 'Image List', img: '/assets/img/landing-page/layouts/image-list.jpg' },
    { title: 'Thumb List', img: '/assets/img/landing-page/layouts/thumb-list.jpg' },
    { title: 'Data List', img: '/assets/img/landing-page/layouts/data-list.jpg' },
    { title: 'Details', img: '/assets/img/landing-page/layouts/details.jpg' },
    { title: 'Authentication', img: '/assets/img/landing-page/layouts/authentication.jpg' },
    { title: 'Search Results', img: '/assets/img/landing-page/layouts/search-result.jpg' },
    {
      title: 'Single Page Application',
      img: '/assets/img/landing-page/layouts/spa.jpg',
    },
    {
      title: 'Data List App Menu Hidden',
      img: '/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg',
    },
    { title: 'Tabs', img: '/assets/img/landing-page/layouts/tabs.jpg' },
  ];

  applications = [
    {
      title: 'Survey',
      path: `${this.adminRoot}/applications/survey`,
      img: '/assets/img/landing-page/applications/survey.jpg',
    },
    {
      title: 'Chat',
      path: `${this.adminRoot}/applications/chat`,
      img: '/assets/img/landing-page/applications/chat.jpg',
    },
    {
      title: 'Todo',
      path: `${this.adminRoot}/applications/todo`,
      img: '/assets/img/landing-page/applications/todo.jpg',
    },
  ];

  themes = [
    { title: 'Navy Blue', class: 'bluenavy' },
    { title: 'Olympic Blue', class: 'blueolympic' },
    { title: 'Yale Blue', class: 'blueyale' },
    { title: 'Moss Green', class: 'greenmoss' },
    { title: 'Lime Green', class: 'greenlime' },
    { title: 'Carrot Orange', class: 'carrotorange' },
    { title: 'Ruby Red', class: 'rubyred' },
    { title: 'Monster Purple', class: 'monsterpurple' },
    { title: 'Steel Grey', class: 'steelgrey' },
    { title: 'Granola Yellow', class: 'granolayellow' },
  ];

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-footer');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    const homeRect = this.elRef.nativeElement
      .querySelector('.home-row')
      .getBoundingClientRect();

    const homeSection = this.elRef.nativeElement.querySelector(
      '.landing-page .section.home'
    );
    homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

    const footerSection = this.elRef.nativeElement.querySelector(
      '.landing-page .section.footer'
    );
    footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + 'px';

    if (event.target.innerWidth >= 992) {
      this.renderer.removeClass(
        this.elRef.nativeElement.querySelector('.landing-page'),
        'show-mobile-menu'
      );
    }
  }

  @HostListener('window:click', ['$event'])
  onClick(event): void {
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.showMobileMenu = false;
  }

  scrollTo(target): void {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };

    this.scrollToService.scrollTo(config);
  }
}
