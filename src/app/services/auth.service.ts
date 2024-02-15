import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'https://9303851354d5e8f0.mokky.dev'

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  setToken(token: string){
    localStorage.setItem('authToken', token)
  }

  getToken(): string | null {
    return localStorage.getItem('authToken')
  }

  removeToken(){
    localStorage.removeItem('authToken')
  }


}
