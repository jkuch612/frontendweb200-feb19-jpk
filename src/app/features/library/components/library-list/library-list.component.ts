import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BookLoaned } from '../../actions/books.actions';
import { BooksListItem } from '../../models';
import { LibraryState } from '../../reducers';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  @Input() books: BooksListItem[];

  constructor(private store: Store<LibraryState>) { }

  ngOnInit() {
  }



  loanBook(book: BooksListItem) {
    this.store.dispatch(new BookLoaned(book));
  }

}
