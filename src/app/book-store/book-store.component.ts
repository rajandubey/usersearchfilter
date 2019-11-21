import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../http-services.service";

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  allbooks=[];s
  constructor(private _http:HttpServicesService) { }

  ngOnInit() {
      this.getAllBooks();
  }

  getAllBooks(){
    this._http.getAllBooks().subscribe( data =>{
        this.allbooks = data;
    },
    error =>{
      console.log(error.errorMessage)
    })
  }

}