export interface ToDoItem {
  id: string;
  description: string;
  completed: boolean;
}

export interface ToDoList {
  items: ToDoItem[];
}
