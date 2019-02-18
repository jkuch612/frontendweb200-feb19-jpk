import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksListItem } from './models';
import { LibraryState, selectAvailableBooks, selectBooksOnLoan, selectFormats } from './reducers';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  availableBooks$: Observable<BooksListItem[]>;
  booksOnLoan$: Observable<BooksListItem[]>;
  format$: Observable<string[]>;

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {

    this.availableBooks$ = this.store.select(selectAvailableBooks);
    this.booksOnLoan$ = this.store.select(selectBooksOnLoan);
    this.format$ = this.store.select(selectFormats);
  }

}
