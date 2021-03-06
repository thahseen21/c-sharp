import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  // todoList = [
  //   // { todo: 'potato', isOver: false, key: 1 },
  //   // { todo: 'another potato', isOver: true, key: 2 },
  // ];
  todoList = Array<{ todo: string; isOver: boolean; key: number }>();
  newTodo = '';
  key = 2;

  constructor() {
    let data = localStorage.getItem('todoList');
    if (data) {
      this.todoList = JSON.parse(data);
    }
  }

  receiveNewTodo($event: string) {
    this.newTodo = $event;
    if (this.newTodo.length > 0) {
      this.todoList.push({
        todo: this.newTodo,
        isOver: false,
        key: ++this.key,
      });
      this.newTodo = '';
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }
}
