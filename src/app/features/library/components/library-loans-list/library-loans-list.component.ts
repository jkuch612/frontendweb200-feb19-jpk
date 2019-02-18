import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookReturned } from '../../actions/books.actions';
import { BooksListItem } from '../../models';
import { LibraryState } from '../../reducers';

@Component({
  selector: 'app-library-loans-list',
  templateUrl: './library-loans-list.component.html',
  styleUrls: ['./library-loans-list.component.css']
})
export class LibraryLoansListComponent implements OnInit {

  @Input() books: BooksListItem[];

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {
  }

  returnBook(book: BooksListItem) {
    this.store.dispatch(new BookReturned(book));
  }

}
