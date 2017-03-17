import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './heroDetails/hero-details.component';
import { HeroService } from './services/hero.service';
import { routing } from './app.routes';
import {TabMenuModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TabMenuModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
