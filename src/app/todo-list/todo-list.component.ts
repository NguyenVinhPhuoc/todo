import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Todo } from '../core/models/todo';
import { TodoServiceService } from '../core/service/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todoForm!: FormGroup;
  todoList$ = this.todoService.todoListWithAdd$;
  todoGroup = {
    title: '👋 Getting started',
    completed: [],
    unCompleted: [],
  };

  constructor(
    private fb: FormBuilder,
    private todoService: TodoServiceService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      todo: '',
    });
  }

  addTodo() {
    const todoControl = this.todoForm.get('todo');
    if (todoControl?.value) {
      const todo: Todo = {
        id: 0,
        content: this.todoForm.get('todo')?.value || '',
        isDone: false,
        isImportant: false,
      };
      this.todoService.addTodo(todo);
    }
    todoControl?.setValue('');
  }
}
