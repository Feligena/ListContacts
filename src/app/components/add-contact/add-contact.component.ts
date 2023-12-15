import { Component } from '@angular/core';
import { FormComponent } from "../form/form.component";

@Component({
    selector: 'app-add-contact',
    standalone: true,
    templateUrl: './add-contact.component.html',
    styleUrl: './add-contact.component.scss',
    imports: [FormComponent]
})
export class AddContactComponent {

}
