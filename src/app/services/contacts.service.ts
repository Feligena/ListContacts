import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

    persons: Array<Person> = [];
    searchText: string = '';
  constructor() { }

  getContact(id: number): Person | undefined{
    return this.persons.find(x => x.id == id);
  }

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

  // updatePerson(id: number, firstName?: string, lastName?: string, phone?: string, email?: string){
  updatePerson(person: Person){   
    let tmp = this.persons.find(x => x.id == person.id);
    if(tmp){
      if(person.firstName) tmp.firstName = person.firstName;
      if(person.lastName) tmp.lastName = person.lastName;
      if(person.phone) tmp.phone = person.phone;
      if(person.email) tmp.email = person.email;
    }
  }

  removePerson(id: number){
    this.persons = this.persons.filter(x => x.id != id);
    // let tmp = this.persons.find(x => x.id == id);
    // if(tmp){
    //   tmp.isDeleted = true;
    //   this.persons = this.persons.filter(x => x.isDeleted != true);
    // }
    
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
