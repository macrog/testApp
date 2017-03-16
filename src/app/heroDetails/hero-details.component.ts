import { Component, Input } from '@angular/core';
import { Hero } from '../viewmodels/hero';

@Component({   
    selector: 'my-hero-details',
    templateUrl: 'hero-details.component.html'
})
export class HeroDetailsComponent {
    @Input() hero: Hero;
}