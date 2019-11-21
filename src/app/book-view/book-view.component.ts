import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route} from '@angular/router'
import { HttpServicesService } from "../http-services.service";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  public bookid;
  public singleBook:any[]=[]
  constructor(private _acRoute:ActivatedRoute, private http:HttpServicesService) { }

  ngOnInit() {
    this.bookid = this._acRoute.snapshot.paramMap.get('bookId');
    console.log(this.bookid)
    this.getSingleBook(this.bookid)
  }

  getSingleBook(bkid){
    this.http.getSingleBook(bkid).subscribe( data =>{
        this.singleBook=data;
        console.log(data)
    },
    error =>{
      console.log(error.errorMessage);
    })
  }



}