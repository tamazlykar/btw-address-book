import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Observable } from 'rxjs/Observable';

import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class ContactService {
    contacts: FirebaseListObservable<any>;

    constructor (private af: AngularFire) {
        this.contacts = this.af.database.list('/contacts');
    }

    add(contact: Contact) {
        this.contacts.push(contact);
    }

    delete(key: string) {
        this.contacts.remove(key);
    }

    update(key: string, contact: Observable<Contact>) {
        let obj = new Contact();
        for (let poperty in contact) {
            if (poperty === '$key' || poperty === '$exists') {
                continue;
            }
            obj[poperty] = contact[poperty];
        }

        this.contacts.update(key, obj);
    }

    fetch(): Observable<Contact[]> {
        return this.contacts;
    }
}
