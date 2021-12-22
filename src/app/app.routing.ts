import { Routes } from '@angular/router';
import { PreciosComponent } from './smartsales/precios/precios.component';

import { SmartsalesComponent } from './smartsales/smartsales.component';
import { SomosComponent } from './somos/somos.component';

export const appRoutes: Routes = [
    { path: '', component: SmartsalesComponent},
    { path: 'somos', component: SomosComponent},
    { path: 'precios', component: PreciosComponent},
    {path: '**', pathMatch: 'full', redirectTo:''}

];