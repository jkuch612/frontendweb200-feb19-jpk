import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodoComponent } from './components/todo/todo.component';
import { LibraryComponent } from './features/library/library.component';
import { TodosReduxComponent } from './features/todos-redux/todos-redux.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'todoredux', component: TodosReduxComponent },
  { path: 'library', component: LibraryComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
