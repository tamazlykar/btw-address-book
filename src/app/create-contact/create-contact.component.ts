import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';

import { ContactService } from '../shared/contact.service';

@Component({
    selector: 'app-create-contact',
    templateUrl: 'create-contact.component.html',
    styleUrls: ['create-contact.component.css']
})
export class CreateContactComponent {
    model: Contact;
    mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    @Output() submitted = new EventEmitter<boolean>();

    constructor(private contactService: ContactService) {
        this.model = new Contact();
    }

    create() {
        if (this.model.phone) {
            this.model.phone = '+7' + this.unMaskPhone(this.model.phone);
        }
        this.contactService.add(this.model);
    }

    onSubmit() {
        this.create();
        this.submitted.emit(true);
    }

    private unMaskPhone(number: string): string {
        return number.replace(/\D/g, '');
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
