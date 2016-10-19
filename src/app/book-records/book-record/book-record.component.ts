import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Contact } from '../../contact';

@Component({
    selector: 'app-book-record',
    templateUrl: 'book-record.component.html',
    styleUrls: ['book-record.component.css']
})
export class BookRecordComponent implements OnInit {
    @Input() contact: Observable<Contact>;
    @Output() deleteKey = new EventEmitter<string>();
    @Output() updateContact = new EventEmitter<Observable<Contact>>();
    maskedPhone: string;
    mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    editName = false;
    editEmail = false;
    editPhone = false;
    editAddress = false;

    previousValue: string;

    ngOnInit() {
        if (this.contact['phone']) {
            let p: string = this.contact['phone'];
            p = p.substring(2);
            this.maskedPhone = '(' + p.substring(0, 3) + ') ' + p.substring(3, 6) + '-' + p.substring(6);
        }
    }

    delete(decision: boolean) {
        if (!decision) {
            return;
        }

        this.deleteKey.emit(this.contact['$key']);
    }

    editContact(type: any) {
       switch (type) {
            case 'name':
                this.editName = true;
                break;
            case 'email':
                this.editEmail = true;
                break;
            case 'phone':
                this.editPhone = true;
                break;
            case 'address':
                this.editAddress = true;
                break;
        }

        this.previousValue = this.contact[type];
    }

    updateEditing(type: string, a: FocusEvent) {
        this.editName = false;
        this.editEmail = false;
        this.editPhone = false;
        this.editAddress = false;

        let classNames = a.srcElement.className;
        const notChanged = "ng-pristine";
        const notValid = "ng-invalid";
        if (classNames.indexOf(notChanged) !== -1) {
            return;
        }

        if (type === 'phone') {
            this.contact['phone'] = '+7' + this.unMaskPhone(this.maskedPhone);
        }

        if (classNames.indexOf(notValid) !== -1) {
            this.contact[type] = this.previousValue;
            return;
        }

        this.updateContact.emit(this.contact);
    }

    private unMaskPhone(number: string): string {
        return number.replace(/\D/g, '');
    }

    get diagnostic() { return JSON.stringify(this.contact); }
}
