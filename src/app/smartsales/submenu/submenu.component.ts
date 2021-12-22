import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from 'src/app/services/home.service';

declare var $ : any; 
declare var fixedNavbar: any;

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  submenu:any = [];
  public userside: any;

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService, @Inject(PLATFORM_ID) private platform_id: any) { }

  ngOnInit(): void {
    this._homeservice.getMenuSmartsales()
    .subscribe((res:any) => {
      this.submenu = this._sanitizer.bypassSecurityTrustHtml(res);
      this.submenu = this.submenu.changingThisBreaksApplicationSecurity;
    });
    if(isPlatformBrowser(this.platform_id)){
      fixedNavbar();
    }
  }

  
  abrirSide(){
    $("#wrapper").toggleClass("toggled");
    $('.overlaytrabaja').addClass('active');
  }

  public cierraTrabajemos() {
    $('.overlaytrabaja').removeClass('active');
    $("#wrapper").toggleClass("toggled");
  }

  scrollConClick( url:string ){
    $('html, body').animate({
      scrollTop: $(url).offset().top
    }, .5);
}

}
