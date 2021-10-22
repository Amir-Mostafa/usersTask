import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client:HttpClient ) {}
  getUsers(data:any):Observable<any>
  {
    const header = new HttpHeaders().set('app-id',"6171a21ba5a267237f4fa271");
    const headers = { headers: header };
    return this.client.get(`https://dummyapi.io/data/v1/user?page=${data.page}&limit=${data.limit}`,headers);

  }
  getUserData(id):Observable<any>
  {
    const header = new HttpHeaders().set('app-id',"6171a21ba5a267237f4fa271");
    const headers = { headers: header };
    return this.client.get(`https://dummyapi.io/data/v1/user/${id}`,headers);

  }
}
