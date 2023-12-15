import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/person';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(arr: Array<Person>, str: string): Array<Person> {
    return arr.filter(x => x.firstName.includes(str));
  }

}
