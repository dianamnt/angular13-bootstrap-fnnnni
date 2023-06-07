import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  declarations: [AppComponent, ListComponent, AddItemComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
