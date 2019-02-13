import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from './messages.reducer';

export interface TodosState {
  message: fromMessage.State;
}

export const reducers = {
  message: fromMessage.reducer
};

// feature selector

const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');

// Branch of Feature Selector(s)
const selectMessage = createSelector(selectTodosFeature, a => a.message);

// helpers

// selector for what the component needs
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);

