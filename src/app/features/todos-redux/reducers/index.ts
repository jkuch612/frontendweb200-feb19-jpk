import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoListItem } from '../models';
import * as fromMessage from './messages.reducer';
import * as fromTodos from './todos.reducer';

export interface TodosState {
  message: fromMessage.State;
  todos: fromTodos.State;
}

export const reducers = {
  message: fromMessage.reducer,
  todos: fromTodos.reducer
};

// feature selector

const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');

// Branch of Feature Selector(s)
const selectMessage = createSelector(selectTodosFeature, a => a.message);
const selectTodos = createSelector(selectTodosFeature, t => t.todos);

// helpers
const { selectAll: selectTodosEntityArray } = fromTodos.adaptor.getSelectors(selectTodos);

// selector for what the component needs
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
export const selectGreeting = createSelector(selectMessage, m => m.greeting);
export const selectTodoListItems = createSelector(selectTodosEntityArray, t => t.map(x => x as TodoListItem));



