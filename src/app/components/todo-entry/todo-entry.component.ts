import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent implements OnInit {

  constructor() { }

  // Can only emit one item to the parent!
  @Output() itemAdded = new EventEmitter<string>();
  ngOnInit() {
  }

  addItem(item: HTMLInputElement) {
    console.log(item.value);
    this.itemAdded.emit(item.value);
    item.value = '';
    item.focus();
  }

}
