import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

export interface Login{

  email : string;

  password : string;

};

export interface Register {

 firstName? :string;

 lastName? : string;

 email? : string;

 password? : string;

};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) {

    


  }

  register(theUser : Register): Observable < any > {
    
      return this.http.post("/api/user/register", theUser);
    }

  login(theUser: Login): Observable<any> {

    return this.http.post("/api/user/login", theUser);
  }


}





