import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', redirectTo: 'heroes', pathMatch: 'full'} 
] 
export const AppRoutes = RouterModule.forRoot(routes);

//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);