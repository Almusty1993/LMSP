import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Iusers } from './user.model';
import { Ibooks } from './books.model';
import { Iborrow } from './borrow.model';
import { Ioverdue } from './overduebooks.model';
import { Icopy } from './copy.model';
import { Innerjoin } from './innerjoin.model';
import { Ihistory } from './history.model';
import { Observable } from 'rxjs';
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




  // resultsearch(title?:any,author? : any,category ? :any){

  //   return this.http.get<Ibooks[]>('http://localhost:3000/resultsearch/'+title+"/"+author+"/"+category);}






  resultsearch(title?: string, author?: string, category?: string): Observable<Ibooks[]> {
   
    let queryParams: any = {};

    
    if (title) {
      queryParams.title = title;
    }

    if (author) {
      queryParams.author = author;
    }

    if (category) {
      queryParams.category = category;
    }

    
    let httpParams = new HttpParams({ fromObject: queryParams });

    return this.http.get<Ibooks[]>('http://localhost:3000/resultsearch', { params: httpParams });
  }


    // resultsearch(body : any){

    //   const options : any = {
    //     headers: { 'Content-Type': 'application/json' }
    //   };
  
    //   console.log(body);
    //   return this.http.get<Ibooks[]>('http://localhost:3000/resultsearch', body);
    // }stro




  getinnerjoin(copy_id:any){

    return this.http.get<Innerjoin[]>('http://localhost:3000/getinnerjoin/'+copy_id);}


   


  getUsers(){

    return this.http.get<Iusers[]>('http://localhost:3000/fetchPersons');}



    
  getbooks(){

    return this.http.get<Ibooks[]>('http://localhost:3000/fetchallbooks');}


    onGethistory(user_id:any){

      return this.http.get<Ihistory[]>('http://localhost:3000/onGethistory/'+user_id);}



      ontopchioce(){

        return this.http.get<Ibooks[]>('http://localhost:3000/ontopchioce');}







      onGetborrow(user_id:any){

        return this.http.get<Ihistory[]>('http://localhost:3000/onGetborrow/'+user_id);}




      gethighcategory(user_id:any){

        return this.http.get<Ihistory[]>('http://localhost:3000/gethighcategory/'+user_id);}




        getrecommand(category:any){

          return this.http.get<Ihistory[]>('http://localhost:3000/getrecommand/'+category);}





          fetchcopy(book_id:any){

            return this.http.get<Icopy[]>('http://localhost:3000/fetchallcopy/'+book_id);}




            getwishlist(user_id:any){

      return this.http.get<Ibooks[]>('http://localhost:3000/getwishlist/'+user_id);}


    
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





  onstatus(book_id :any){
console.log(book_id)
    const options : any = {
      headers : {'Content-Type': 'application/json'}
    };

    return this.http.put('http://localhost:3000/onstatus/'+book_id, options );
   

  }



  updatecopynumber(book_id :any){

    const options : any = {
      headers : {'Content-Type': 'application/json'}
    };

    return this.http.put('http://localhost:3000/updatecopynumber/'+book_id, options );
   

  }


  onrate(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

 
    return this.http.post('http://localhost:3000/onrate', body, options);
  }








  onborrow(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/onborrow', body, options);
  }



  addOverdue(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/addoverdue', body, options);
  }


  addhistory(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/addhistory', body, options);
  }



  addwishlist(body : any){

    const options : any = {
      headers: { 'Content-Type': 'application/json' }
    };

    console.log(body);
    return this.http.post('http://localhost:3000/addwishlist', body, options);

  }
  


  getoverduebooks(){

    return this.http.get<Ioverdue[]>('http://localhost:3000/fetchoverduebooks');}


    onfetchborrownumber(user_id:any){

      return this.http.get<Ibooks[]>('http://localhost:3000/onfetchborrownumber/'+user_id);}




      onfetchmembership(user_id:any){

        return this.http.get<Iusers[]>('http://localhost:3000/onfetchmembership/'+user_id);}



    onlatest(){

      return this.http.get<Ibooks[]>('http://localhost:3000/onlatest');}

    

    updatefine(borrow_id :any ,data : any){

      const options : any = {
        headers : {'Content-Type': 'application/json'}
      };
  
      return this.http.put('http://localhost:3000/updateoverdue/'+borrow_id,data, options );
     
  
    }

    deletewishlist(book_id:any){
      return this.http.delete('http://localhost:3000/deletewishlist/'+book_id);
    }
   
    deletePerson(user_id:any){
      return this.http.delete('http://localhost:3000/deletePersons/'+user_id);
    }


    deleteoverdue(borrow_id:any){
      return this.http.delete('http://localhost:3000/deleteoverdue/'+borrow_id);
    }



    deleteborrow(copy_id:any){
      return this.http.delete('http://localhost:3000/deleteborrow/'+copy_id);
    }




    deleteBook(book_id:any){
      return this.http.delete('http://localhost:3000/deleteBook/'+book_id);
    }


  

    

 

    deletewholecopyBook(book_id:any){
    
      
      return this.http.delete('http://localhost:3000/deletewholecopioes/'+book_id);
    }
   






    deleteBookcopy(copy_id:any){
    
      
      return this.http.delete('http://localhost:3000/deleteBookcopy/'+copy_id);
    }
    

   
        
        



   
  
    onAdd(formData:FormData){
   

     
   return this.http.post('http://localhost:3000/onAdd', formData);
    }






    updatebook(formData:FormData){
   

      // return this.http.put('http://127.0.0.1:3000/person/updateProducts', formData);
   return this.http.put('http://localhost:3000/updatebook', formData);
    }




    updateuser(user_id :any, data : any){

      const options : any = {
        headers : {'Content-Type': 'application/json'}
      };
      return this.http.put('http://localhost:3000/updateuser/'+user_id, data, options );
   

    }
  

    updatecopyavailabe(copy_id :any, data : any){

      const options : any = {
        headers : {'Content-Type': 'application/json'}
      };
      return this.http.put('http://localhost:3000/copyavailabe/'+copy_id, data, options );
   

    }
}







