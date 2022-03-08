import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TodoListComponent } from './todo-list.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent, TodoDetailComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, HttpClientModule],
  exports: [TodoListComponent],
})
export class TodoListModule {}
