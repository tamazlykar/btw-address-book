import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { BookRecordsComponent } from './book-records/book-records.component';
import { BookRecordComponent } from './book-records/book-record/book-record.component';

import { ContactService } from './shared/contact.service';
import { SearchPipe } from './shared/search.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { FocusDirective } from './shared/focus.directive';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { TextMaskModule } from 'angular2-text-mask';

export const firebaseConfig = {
    apiKey: "AIzaSyCxaLHVftYRPsvRQlpT5FGA3JFcvi3P4So",
    authDomain: "btw-address-book.firebaseapp.com",
    databaseURL: "https://btw-address-book.firebaseio.com",
    storageBucket: "btw-address-book.appspot.com",
    messagingSenderId: "716788273656"
  };

@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    BookRecordsComponent,
    BookRecordComponent,
    SearchPipe,
    ReversePipe,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule,
    Ng2Bs3ModalModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
