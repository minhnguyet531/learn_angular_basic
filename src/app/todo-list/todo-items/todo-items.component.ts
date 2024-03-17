import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list.module';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  @Input() items!: Todo[];
  @Output() editItem = new EventEmitter<Todo>();
  constructor() {}
  public name: string = '';

  ngOnInit(): void {}

  public edit(item: Todo) {
    // this.name = item.name;
    const editedItem = {
      id: item.id,
      name: item.name,
    };
    this.editItem.emit(editedItem);
  }

  public delete(item: Todo) {
    this.items = this.items.filter((vl) => vl.id !== item.id);
  }
}
