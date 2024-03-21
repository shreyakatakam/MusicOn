import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient: HttpClient) { }


  register(userData:any): Observable<any>
  {
    return this.httpClient.post<User>("http://localhost:8088/auth/v1/register",userData)
  }
  checkLogin(login: any) {
    return  this.httpClient.post("http://localhost:8088/auth/v1/login", login);
   }
}
