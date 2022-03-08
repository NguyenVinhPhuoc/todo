import { Todo } from './todo';

export interface TodoGroup {
  id: number;
  icon: string;
  title: string;
  todoList: Todo[];
}
