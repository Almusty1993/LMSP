import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iusers } from './user.model';
import { Ibooks } from './books.model';
import { Iborrow } from './borrow.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  getUsers(){

    return this.http.get<Iusers[]>('http://localhost:3000/person/fetchPersons');}



    
  getbooks(){

    return this.http.get<Ibooks[]>('http://localhost:3000/fetchallbooks');}


    
    getborrowedbooks(){

      return this.http.get<Iborrow[]>('http://localhost:3000/fetchborrowedbooks');}












}
