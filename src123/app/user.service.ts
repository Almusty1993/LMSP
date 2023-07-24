import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iusers } from './user.model';
import { Ibooks } from './books.model';
import { Iborrow } from './borrow.model';
import { Ioverdue } from './overduebooks.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  

  private isLoggedIn: boolean = false;
  private isUser: any = '';

  get loggedIn(): boolean {
    return this.isLoggedIn;
  }

  set loggedIn(value : boolean) {
    this.isLoggedIn = value;
  }

  get user(): any {
    return this.isUser;
  }

  set user(value : any) {
    this.isUser = value;
  }






  getUsers(){

    return this.http.get<Iusers[]>('http://localhost:3000/fetchPersons');}



    
  getbooks(){

    return this.http.get<Ibooks[]>('http://localhost:3000/fetchallbooks');}


    
    getborrowedbooks(){

      return this.http.get<Iborrow[]>('http://localhost:3000/fetchborrowedbooks');}





      SignUp(body : any){

        const options : any = {
          headers: { 'Content-Type': 'application/json' }
        };
    
        console.log(body);
        return this.http.post('http://localhost:3000/SignUp', body, options);
      }





  LogIn(body:any){
    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/postLogIn', body, options);
  }








  updatename(email :any){

    const options : any = {
      headers : {'Content-Type': 'application/json'}
    };

    return this.http.put('http://localhost:3000/person/updatePassword/'+email, options );
   

  }


  addOverdue(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/addoverdue', body, options);
  }


 
  


  getoverduebooks(){

    return this.http.get<Ioverdue[]>('http://localhost:3000/fetchoverduebooks');}





    

    updatefine(borrow_id :any ,data : any){

      const options : any = {
        headers : {'Content-Type': 'application/json'}
      };
  
      return this.http.put('http://localhost:3000/updateoverdue/'+borrow_id,data, options );
     
  
    }

    
   






}


