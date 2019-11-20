import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../http-services.service";

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  allToDos=[]
  constructor(private _http:HttpServicesService) { }

  ngOnInit() {
    this.loadAllToDos();
  }
  loadAllToDos():any{
    this._http.getToDos().subscribe( data =>{
        this.allToDos = data;
        console.log(this.allToDos)
    },
    error =>{
        console.log(error.errorMessage);
    })
  }

}