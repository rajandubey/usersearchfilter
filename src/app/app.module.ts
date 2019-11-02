import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { ToDosComponent } from './to-dos/to-dos.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, ToDosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
