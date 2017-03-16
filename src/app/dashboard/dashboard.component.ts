import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../viewmodels/hero';

@Component({
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    bestHeroes: Hero[];
    selectedHero: Hero;
    hero: Hero;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.bestHeroes = this._heroService.getBestHeroes();
    }
    onSelect(hero: Hero): void { 
        this.selectedHero = hero; 
    }
}

   