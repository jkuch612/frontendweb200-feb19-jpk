import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoList } from './models';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  stuff: Observable<ToDoList>;

  constructor(private service: TodoDataService) {
    this.stuff = service.getListAsObservable();
  }

  ngOnInit() {
  }

  addNewItem(description: string) {
    this.service.addTodoListItem(description);
    // this.stuff = this.service.getList();
  }
}
