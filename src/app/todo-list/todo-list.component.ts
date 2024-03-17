import { Component, OnInit } from '@angular/core';
import { Todo } from './todo-list.module';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public name: string = '';
  public name_edit: string = '';
  public items: Todo[] = [];
  public id!: number;
  constructor() {}

  ngOnInit(): void {}

  public submitForm() {
    const newItem: Todo = {
      id: this.generateUniqueId(),
      name: this.name,
    };
    this.items = [...this.items, newItem];
    this.name = ''; // Clear input field after submission
  }

  public onEditItem(editedItem: Todo) {
    this.name_edit = editedItem.name;
    this.id = editedItem.id;
  }

  public submitFormEdit() {
    const index = this.items.findIndex((item) => item.id === this.id);
    if (index !== -1) {
      this.items[index] = {
        id: this.id,
        name: this.name_edit,
      };
    }
    this.name_edit = ''; // Clear input field after submission
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
