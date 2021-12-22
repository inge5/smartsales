import { Component, OnInit } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';
import { HomeService } from 'src/app/services/home.service';
import { DomSanitizer } from '@angular/platform-browser';

declare var $ : any; 

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  public userside: any;
  prices:any = [];
  loader = true;


  constructor(private _sanitizer: DomSanitizer, private _homeservice:HomeService) { 
  }


  ngOnInit(): void {
    
    this._homeservice.getPriceSmartsales()
    .subscribe((res:any) => {
      this.prices = this._sanitizer.bypassSecurityTrustHtml(res);
      this.prices = this.prices.changingThisBreaksApplicationSecurity;
      this.loader = false;
    });
  }

}
