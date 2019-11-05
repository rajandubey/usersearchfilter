import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
@Injectable()
export class HttpServicesService {

  public baseUser:any="https://jsonplaceholder.typicode.com/"
  constructor(private _http:HttpClient) { }

  getAllUserList():any{
    let myResponse = this._http.get(this.baseUser+'users');
    return myResponse;
  }

  getSingleUserInfo(userID):any{
    let myResponse = this._http.get(this.baseUser+'users/'+userID);
    return myResponse;
  }

}