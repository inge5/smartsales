import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { }
  data1:any = [];
  data2:any = [];
  data3:any = [];

  ngOnInit(): void {
    this._homeservice.getMenuProductos()
    .subscribe((res:any) => {
      this.data1 = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data1 = this.data1.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getMenuEnigma()
    .subscribe((res:any) => {
      this.data2 = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data2 = this.data2.changingThisBreaksApplicationSecurity;
    });
    this._homeservice.getWidgets()
    .subscribe((res:any) => {
      this.data3 = this._sanitizer.bypassSecurityTrustHtml(res);
      this.data3 = this.data3.changingThisBreaksApplicationSecurity;
    });

  }

}
