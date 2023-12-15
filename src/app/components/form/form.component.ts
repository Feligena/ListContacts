import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Person } from '../../models/person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  item: Person = new Person();
  constructor(public contactsService: ContactsService){}

  onAddPerson(){
    if(this.item){
      this.contactsService.addPerson(this.item);
      this.contactsService.save();
       this.item.firstName = '';
       this.item.lastName = '';
       this.item.phone = '';
       this.item.email = '';
    }
  }
}
