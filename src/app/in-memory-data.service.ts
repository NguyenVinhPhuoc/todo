import { Injectable } from '@angular/core';
import { Todo } from './core/models/todo';
import { TodoGroup } from './core/models/todoGroup';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const todoList: Todo[] = [
      {
        id: 1,
        content: 'Add your first task by clicking on ➕ Add a task',
        isDone: true,
        isImportant: false,
      },
    ];

    const todoGroup: TodoGroup[] = [
      {
        id: 1,
        title: 'Getting started ',
        icon: 'smiling-face',
        todoList: todoList,
      },
    ];
    return { todoList, todoGroup };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(todoList: Todo[]): number {
    return todoList.length > 0
      ? Math.max(...todoList.map((todo) => todo.id)) + 1
      : 11;
  }
}
