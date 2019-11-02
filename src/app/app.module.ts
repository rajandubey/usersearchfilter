import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { NgwWowModule } from 'ngx-wow';
import { AboutComponent } from './about/about.component';

const routers:Routes=[
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'todo',
    component:ToDosComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,NgwWowModule,RouterModule.forRoot(routers) ],
  declarations: [ AppComponent, UsersComponent, ToDosComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
