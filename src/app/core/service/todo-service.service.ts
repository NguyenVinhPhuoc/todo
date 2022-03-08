import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, scan, Subject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  private todoUrl = 'api/todoList';
  todoList$ = this.http.get<Todo[]>(this.todoUrl);
  constructor(private http: HttpClient) {}

  private todoInsertedSubject = new Subject<Todo>();
  todoInsertedAction$ = this.todoInsertedSubject.asObservable();

  todoListWithAdd$ = merge(this.todoList$, this.todoInsertedAction$).pipe(
    scan(
      (acc, curr) => (curr instanceof Array ? [...curr] : [...acc, curr]),
      [] as Todo[]
    )
  );

  addTodo(newTodo: Todo) {
    this.todoInsertedSubject.next(newTodo);
  }
}
