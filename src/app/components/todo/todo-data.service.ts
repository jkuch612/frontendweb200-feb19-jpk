import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToDoItem, ToDoList } from './models';

@Injectable()
export class TodoDataService {

  private count = 99;
  private data: ToDoList = {
    items: [
      { id: '1', description: 'Shovel Snow', completed: false },
      { id: '2', description: 'Change Oil', completed: true }
    ]
  };

  private subject: BehaviorSubject<ToDoList>;

  constructor() {
    this.subject = new BehaviorSubject<ToDoList>(this.data);
  }

  getList(): ToDoList {
    return { ...this.data };
  }

  getListAsObservable(): Observable<ToDoList> {
    return this.subject.asObservable();
  }

  addTodoListItem(description: string) {
    const itemToAdd: ToDoItem = {
      description,
      completed: false,
      id: (this.count++).toString()
    };

    this.data.items = [itemToAdd, ...this.data.items];
    // let everyone know that it is observing this data a new "issue" of the data is available.

    this.subject.next(this.data);
  }

}
