import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.sass'],
})
export class TodoDetailComponent implements OnInit {
  @Input() todo!: Todo;
  startIcon = '';

  constructor() {}

  ngOnInit(): void {
    this.startIcon = this.todo.isImportant ? 'star' : 'star-outline';
  }

  toggle() {
    this.todo.isDone = !this.todo.isDone;
  }

  changeIcon() {
    if (this.startIcon === 'star-outline') {
      this.startIcon = 'star';
    } else {
      this.startIcon = 'star-outline';
    }
  }
}
