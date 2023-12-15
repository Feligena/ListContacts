import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [SearchComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class NavbarComponent {

}
