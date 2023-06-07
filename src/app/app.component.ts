import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  itemList: string[] = ['Apple', 'Banana', 'Orange'];

  addItem(value: string) {
    this.itemList.push(value);
  }

  deleteItem(value: string) {
    this.itemList = this.itemList.filter((el) => el !== value);
  }
}
