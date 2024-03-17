import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

@NgModule({
  declarations: [
    // TodoItemsComponent
  ],
  imports: [CommonModule],
})
export class TodoListModule {}

export interface Todo {
  id: number;
  name: string;
}
