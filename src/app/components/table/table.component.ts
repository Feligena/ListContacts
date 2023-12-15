import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { Person } from '../../models/person';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, SearchPipe, HttpClientModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  sortPhone: boolean = false;
  
  constructor(public contactsService: ContactsService,
              public http:HttpClient){}

  // onUpdatePersonData(id:number){
  //   this.contactsService.updatePerson(id);
  //   this.contactsService.save();
  // }

onRemovePersonData(id: number): void{
  this.contactsService.removePerson(id);
  this.contactsService.save();
}

sortByPhone(){
  this.sortPhone = !this.sortPhone;
}

async ngOnInit(): Promise<void> {
  
  try{
    this.contactsService.persons = await this.http.get('assets/people.json').toPromise() as unknown as Array<Person>;
 }catch(error){}

  this.contactsService.load();
}

}
