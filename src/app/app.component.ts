import { Component } from '@angular/core';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iusers } from './user.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any;
  books: any;
  borrowbooks: any;




  title = 'LMSP';

  isLoggedIn = false;

  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient
    
    ){

   this.router.events.subscribe((event) => {
     if (event instanceof NavigationEnd) {
       
       this.retrieveData();
     }
   });
   
 }


 user : any = ''

 ngOnInit(): void {



console.log('Page Refresh/Browser restart');

   this.isLoggedIn = this.userObj.loggedIn;
  const sessionId = this.cookieservice.get('sessionId');//cookie avalable in the browser.
  if(sessionId){

   console.log(sessionId);
   
    this.retrieveUserData(sessionId);
   
   }
 }
 retrieveData(){
   console.log('retrieve data hit');
   this.isLoggedIn = this.userObj.loggedIn;
   this.user = this.userObj.user;
   console.log('retrieve data hit ' +this.isLoggedIn+ ' '+this.user );
 }
 


retrieveUserData(sessionId : string){

  
 const header = new HttpHeaders(
 
  {
 
 'X-Session-ID' : sessionId
 
 }
 
 );
 this.http.get<Iusers>('http://localhost:3000/validateSession',{headers:header}).subscribe( 
   (response:any)=>{ //{isLoggedIn: true , user}
     //logic here upon receiving the response
     if(response.isLoggedIn){
       this.isLoggedIn = true;//for ngIf
       this.user = response.user;
       this.userObj.loggedIn = true;
       this.userObj.user = response.user;
       console.log("user is "+this.user)

     }else{
       this.isLoggedIn=false;
       this.userObj.loggedIn = false
     }
   })
}
onLogOut(){

 this.cookieservice.delete('sessionId');
 this.cookieservice.delete('userId');
 this.user='';
 this.userObj.loggedIn=false;
 this.userObj.user ='';
 this.isLoggedIn = false;


}








// onGetusers(){
//   console.log("all users");
//   this.userSrvObj.getUsers().subscribe((response: any)=>{
//     console.log("user response");
//     this.users=response
//   })
// }

// onGetbooks(){
//   console.log("all books");
//   this.userSrvObj.getbooks().subscribe((response: any)=>{
//     console.log("books response");
//     this.books=response
//   })
// }

// onGetborrowedbooks(){
//   console.log("all borrowed books");
//   this.userSrvObj.getborrowedbooks().subscribe((response: any)=>{
//     console.log(" borrow response");
//     this.borrowbooks=response
//   })
// }

}





