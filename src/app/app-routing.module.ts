import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartsalesComponent } from './smartsales/smartsales.component';

const appRoutes: Routes = [
  { path: '', component: SmartsalesComponent},
  // { path: 'precios', component: PreciosComponent},
  {path: '**', pathMatch: 'full', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // scrollOffset: [0, 64],
    useHash: true, initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
