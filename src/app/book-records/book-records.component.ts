import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../contact';

import { ContactService } from '../shared/contact.service';

@Component({
    selector: 'app-book-records',
    templateUrl: 'book-records.component.html'
})
export class BookRecordsComponent implements OnInit {
    @Input()
    searchStr: string;
    contacts: Observable<Contact[]>;

    constructor(private contactService: ContactService) {
    }

    getContacts() {
        this.contacts = this.contactService.fetch();
    }

    deleteContact(key: string) {
        this.contactService.delete(key);
    }

    updateContact(contact: Observable<Contact>) {
        this.contactService.update(contact['$key'], contact);
    }

    ngOnInit() {
        this.getContacts();
    }
}
