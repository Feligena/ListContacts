import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

    persons: Array<Person> = [];
    searchText: string = '';
  constructor() { }


  addPerson(person: Person){
    
    let tmpPerson: Person = {
      id: this.persons.length,
      firstName: person.firstName,
      lastName: person.lastName,
      phone: person.phone,
      email: person.email
    };
    this.persons.push(tmpPerson);
  }

  updatePerson(id: number, firstName?: string, lastName?: string, phone?: string, email?: string){
    let tmp = this.persons.find(x => x.id == id);
    if(tmp){
      if(firstName) tmp.firstName = firstName;
      if(lastName) tmp.lastName = lastName;
      if(phone) tmp.phone = phone;
      if(email) tmp.email = email;
    }
  }

  removePerson(id: number){
    this.persons = this.persons.filter(x => x.id != id)
  }

  searchPersonByName(str: string){
    this.searchText = str;
  }

  load(){
    let json = localStorage.getItem('phoneBook');
    if(json){
      this.persons = JSON.parse(json);
    }
  }

  save(){
    localStorage.setItem("phoneBook", JSON.stringify(this.persons));
  }
 
}
