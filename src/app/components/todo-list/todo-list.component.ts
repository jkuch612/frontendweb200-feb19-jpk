import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem, ToDoList } from '../todo/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() list: ToDoList;

  constructor() { }

  ngOnInit() {
  }

  markCompleted(item: ToDoItem) {
    item.completed = true;
  }

}
