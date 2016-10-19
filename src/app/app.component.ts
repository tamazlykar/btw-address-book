import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Адресная книга';
  searchStr: string;
  showCreateForm = false;

  private buttonCreateClick() {
    this.showCreateForm = !this.showCreateForm;
  }

  private onSubmittedCreateForm(submitted: boolean) {
    if (submitted) {
      this.showCreateForm = false;
    }
  }
}
