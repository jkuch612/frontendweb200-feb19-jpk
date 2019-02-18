import { Action } from '@ngrx/store';



export interface State {
  formats: string[];
}

const initialState: State = {
  formats: ['Hardcover', 'Paperback', 'E-Book']
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
