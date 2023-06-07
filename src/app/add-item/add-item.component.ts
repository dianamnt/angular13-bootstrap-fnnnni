import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  @Output() item = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  addItem(value: string) {
    this.item.emit(value);
  }
}
