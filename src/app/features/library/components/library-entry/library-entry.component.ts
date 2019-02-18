import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../actions/books.actions';
import { LibraryState } from '../../reducers';

@Component({
  selector: 'app-library-entry',
  templateUrl: './library-entry.component.html',
  styleUrls: ['./library-entry.component.css']
})
export class LibraryEntryComponent implements OnInit {

  @Input() formats: string[];

  bookTitle: string;
  bookAuthor: string;

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {
  }

  addForm(authorElement: HTMLInputElement,
          titleElement: HTMLInputElement,
          formatElement: HTMLSelectElement,
          form: HTMLFormElement) {

    this.store.dispatch(new actions.BookAdded(
      {
        author: authorElement.value,
        title: titleElement.value,
        format: formatElement.value,
        id: '',
        onLoan: false
      }
    ));
    authorElement.value = '';
    titleElement.value = '';
    formatElement.value = this.formats[0];
    form.reset();
  }

}
