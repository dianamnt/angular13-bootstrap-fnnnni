import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() itemList: string[] = [];
  @Output() deleteItem = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  delete(value: string) {
    this.deleteItem.emit(value);
  }
}
