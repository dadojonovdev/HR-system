import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'https://9303851354d5e8f0.mokky.dev'

  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post(`${this.baseUrl}/register`, user)
  }
}
