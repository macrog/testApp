import { Component, OnInit } from '@angular/core';
import { Hero } from '../viewmodels/hero';
import { HeroService } from '../services/hero.service';

@Component({
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit{  
  selectedHero: Hero;
  heroes: Hero[];
  hero: Hero;

  constructor(private _heroService: HeroService){}

  ngOnInit() {    
    this.heroes = this._heroService.getHeroes();
  }

  onSelect(hero: Hero): void { 
    this.selectedHero = hero; 
  }
}