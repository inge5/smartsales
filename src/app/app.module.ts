import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SmartsalesComponent, SafeHtmlPipe } from './smartsales/smartsales.component';
import { SubmenuComponent } from './smartsales/submenu/submenu.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { SidebarComponent } from './smartsales/sidebar/sidebar.component';
import { PreciosComponent } from './smartsales/precios/precios.component';
import { SidebarContactoComponent } from './sidebar-contacto/sidebar-contacto.component';
import { AnimateContactoComponent } from './animate-contacto/animate-contacto.component';
import { SomosComponent } from './somos/somos.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SmartsalesComponent,
    SafeHtmlPipe,
    SubmenuComponent,
    SidebarComponent,
    PreciosComponent,
    SidebarContactoComponent,
    AnimateContactoComponent,
    SomosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    CarouselModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 64],
    useHash: true, initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
