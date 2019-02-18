import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksListItem } from '../models';
import * as fromBooks from './book.reducers';
import * as fromFormats from './format.reducer';


export interface LibraryState {
  formats: fromFormats.State;
  books: fromBooks.State;
}

export const reducers = {
  formats: fromFormats.reducer,
  books: fromBooks.reducer
};

const selectLibraryFeature = createFeatureSelector<LibraryState>('library');

const selectFormatState = createSelector(selectLibraryFeature, a => a.formats);
const selectBooksState = createSelector(selectLibraryFeature, b => b.books);

const { selectAll: selectBookArray } = fromBooks.adaptor.getSelectors(selectBooksState);

export const selectFormats = createSelector(selectFormatState, f => f.formats);
export const selectAllBooks = createSelector(selectBookArray, b => b.map(i => i as BooksListItem));
export const selectAvailableBooks = createSelector(selectBookArray, b => b.map(i => i as BooksListItem).filter(a => !a.onLoan));
export const selectBooksOnLoan = createSelector(selectBookArray, b => b.map(i => i as BooksListItem).filter(a => a.onLoan));



