import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  author: string;
  title: string;
  format: string;
  onLoan: boolean;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: { id: '1', author: 'Joseph Heller', title: 'Catch-22', format: 'Hardcover', onLoan: false },
    2: { id: '2', author: 'James S. A. Corey', title: 'Leviathan Wakes', format: 'Paperback', onLoan: false },
    3: { id: '3', author: 'Steven Erikson', title: 'Gardens of the Moon', format: 'E-Book', onLoan: false },
  }

};

export const adaptor = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: fromActions.All): State {
  switch (action.type) {
    case fromActions.BOOK_ADDED: {
      return adaptor.addOne(action.payload, state);
    }
    case fromActions.BOOK_LOANED:
    case fromActions.BOOK_RETURNED: {
      return adaptor.updateOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}
