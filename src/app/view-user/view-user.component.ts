import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpServicesService } from "../http-services.service";
import {Location} from '@angular/common';

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"]
})
export class ViewUserComponent implements OnInit {
  public userID;
  public singleUser;
  constructor(
    private ac_router: ActivatedRoute,
    private httpService: HttpServicesService,
    private _router:Router,
    private location:Location
  ) {}

  ngOnInit() {
    this.userID = this.ac_router.snapshot.paramMap.get("id");
    this.httpService.getSingleUserInfo(this.userID).subscribe(
      data => {
        this.singleUser = data;
       // console.log(this.singleUser);
      },
      error => {
        console.log("Error Ocurred");
        console.log(error.errorMessage);
      }
    );
  }

  goBack(){
    return this.location.back();
  }
}
