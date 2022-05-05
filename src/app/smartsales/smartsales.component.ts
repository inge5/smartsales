import {
  Component,
  Inject,
  OnInit,
  Pipe,
  PipeTransform,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { HomeService } from '../services/home.service';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { CommonService } from '../services/common.service';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  public transform(
    value: any,
    type: string
  ): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    switch (type) {
      case 'html':
        return this.sanitized.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitized.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitized.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitized.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitized.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}

@Component({
  selector: 'app-smartsales',
  templateUrl: './smartsales.component.html',
  styleUrls: ['./smartsales.component.css'],
})
export class SmartsalesComponent implements OnInit {
  loader = true;
  submenu: any = [];
  data: any = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,

    slideTransition: 'linear',
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: false,
  };

  constructor(
    private _sanitizer: DomSanitizer,
    private _homeservice: HomeService,
    private common: CommonService,
    @Inject(PLATFORM_ID) private platform_id: any
  ) {
    // AOS.init();
  }

  ngOnInit(): void {
    this.common.paginaSmartSalesMetaData();
    this._homeservice.getMenuSmartsales().subscribe((res: any) => {
      this.submenu = this._sanitizer.bypassSecurityTrustHtml(res);
      this.submenu = this.submenu.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getHomeSmartsales().subscribe((res: any) => {
      this.loader = false;
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
  }
  colocarColor(id: number) {
    $(`#${id}`).toggleClass('colorCliente');
  }
  abrirSide() {
    if (isPlatformBrowser(this.platform_id)) {
      $('#wrapper').toggleClass('toggled');
      $('.overlaytrabaja').addClass('active');
    }
  }

  public cierraTrabajemos() {
    if (isPlatformBrowser(this.platform_id)) {
      $('.overlaytrabaja').removeClass('active');
      $('#wrapper').toggleClass('toggled');
    }
  }

  scrollConClick(url: string) {
    if (isPlatformBrowser(this.platform_id)) {
      $('html, body').animate(
        {
          scrollTop: $(url).offset().top,
        },
        0.5
      );
    }
  }
}
