import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchText: string = '';

  constructor( public contactsService: ContactsService){}

  onSearchByName(){
    this.contactsService.searchPersonByName(this.searchText);
    this.contactsService.save();
    this.searchText = '';
  }
}
