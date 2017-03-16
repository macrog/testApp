import { Injectable } from '@angular/core';
import { Hero } from '../viewmodels/hero';; 
import { HEROES } from '../data/mock-heroes'; 
import { BESTHEROES } from '../data/mock-best-heroes'; 

@Injectable()
export class HeroService {

    constructor() { }

    getHeroes() :Hero[]{
        return HEROES;
    }

    getBestHeroes() :Hero[]{
        return BESTHEROES;
    }
}