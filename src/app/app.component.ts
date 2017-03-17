import { Component } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  private items: MenuItem[];
  private activeItem: MenuItem;

    ngOnInit() {
        this.items = [
            {label: 'Dashboard', icon: 'fa-bar-chart', url: 'dashboard'},
            {label: 'Heroes', icon: 'fa-calendar', url: 'heroes'}           
        ];
    }    
}
