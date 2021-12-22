import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data:any = [];
  widgets:any = [];
  productos:any = [];
  sesion:any = [];
  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }

  ngOnInit(): void {
    this._homeservice.getMenuPrincipal()
    .subscribe((res:any) => {
      this.data = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data = this.data.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getWidgets()
    .subscribe((res:any) => {
      this.widgets = this._sanitizer.bypassSecurityTrustHtml(res);
      this.widgets = this.widgets.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getMenuProductos()
    .subscribe((res:any) => {
      this.productos = this._sanitizer.bypassSecurityTrustHtml(res);
      this.productos = this.productos.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getMenuInicioSesion()
    .subscribe((res:any) => {
      this.sesion = this._sanitizer.bypassSecurityTrustHtml(res);
      this.sesion = this.sesion.changingThisBreaksApplicationSecurity;
    });
  }
  scrollConClick( url:string ){
    $('html, body').animate({
      scrollTop: $(url).offset().top
    }, .5);
}

}
