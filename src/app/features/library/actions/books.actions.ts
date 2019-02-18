import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { BooksListItem } from '../models';
import { BookEntity } from '../reducers/book.reducers';

let bookId = 99;

export const BOOK_ADDED = '[LibraryFeature] Book Added';
export const BOOK_LOANED = '[LibraryFeature] Book Loaned';
export const BOOK_RETURNED = '[LibraryFeature] Book Returned';
export class BookAdded implements Action {
  readonly type = BOOK_ADDED;
  payload: BookEntity;
  constructor(book: BooksListItem) {
    this.payload = {
      title: book.title,
      author: book.author,
      format: book.format,
      onLoan: book.onLoan,
      id: 'B' + (bookId++)
    };
  }
}

export class BookLoaned implements Action {
  readonly type = BOOK_LOANED;
  payload: Update<BookEntity>;
  constructor(book: BooksListItem) {
    this.payload = {
      id: book.id,
      changes: {
        onLoan: true
      }
    };
  }
}

export class BookReturned implements Action {
  readonly type = BOOK_RETURNED;
  payload: Update<BookEntity>;
  constructor(book: BooksListItem) {
    this.payload = {
      id: book.id,
      changes: {
        onLoan: false
      }
    };
  }
}

export type All = BookAdded | BookLoaned | BookReturned;

