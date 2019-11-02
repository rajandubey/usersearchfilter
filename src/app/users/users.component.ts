import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from '../http-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  alluser;
  constructor(private httpService:HttpServicesService) { }

  ngOnInit() {
    this.httpService.getAllUserList().subscribe(
      data =>{
        this.alluser = data;
      },
      error =>{
        console.log(error.errorMessage);
      }
    )
  }

}