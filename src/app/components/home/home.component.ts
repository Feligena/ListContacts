import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TableComponent]
})
export class HomeComponent {

}
