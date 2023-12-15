import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'app-update-contact',
    standalone: true,
    templateUrl: './update-contact.component.html',
    styleUrl: './update-contact.component.scss',
    imports: [FormComponent]
})
export class UpdateContactComponent {
    id: number = 0;
    private subscription: Subscription; 
    contact: any;
    
    constructor(private route: ActivatedRoute,
        public contactsServise: ContactsService){
          this.subscription = route.params.subscribe(params=>this.id=params["id"]);
        }


    async ngOnInit() {
        // let response = await this.contactsServise.getContact(this.id);
        // if(response) this.contact = response;
    }
}
