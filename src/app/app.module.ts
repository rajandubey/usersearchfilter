import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { NgwWowModule } from 'ngx-wow';


@NgModule({
  imports:      [ BrowserModule, FormsModule,NgwWowModule,RouterModule ],
  declarations: [ AppComponent, HelloComponent, UsersComponent, ToDosComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
