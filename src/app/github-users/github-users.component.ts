import { Component, OnInit } from '@angular/core';
import { HttpServicesService } from "../http-services.service";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  allgithubusers=[];
  constructor(private _http:HttpServicesService) { }

  ngOnInit() {
    this.getAallGithubUsers();
  }

  getAallGithubUsers(){
    this._http.getAllGithubUsers().subscribe(  data =>{
          this.allgithubusers = data;
         console.log(this.allgithubusers)
    },
    error =>{
      console.log(error.errorMessage)
    })
  }

}