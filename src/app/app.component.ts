import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iusers } from './user.model';
import { NavigationEnd} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';

// declare var Kommunicate: any; // Declare Kommunicate global variable

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  title = 'LMSP';






 users: any;
  books: any;
  borrowbooks: any;
  isLoggedIn = false;
  overduebooks: any;
  userexist: boolean=false;

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


 user : any = ""

 ngOnInit(): void {





  (function(d, m){
    var kommunicateSettings = 
        {"appId":"732bd766a8aab28f105c066870aa0a75","popupWidget":true,"automaticChatOpenOnNavigation":true};
    var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    (window as any).kommunicate = m; m._globals = kommunicateSettings;
})(document, (window as any).kommunicate || {});


// (function (d, m) {
//   var kommunicateSettings = {
//     appId: "732bd766a8aab28f105c066870aa0a75",
//     popupWidget: true,
//     automaticChatOpenOnNavigation: true,
//   };
//   var s = document.createElement("script");
//   s.type = "text/javascript";
//   s.async = true;
//   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//   var h = document.getElementsByTagName("head")[0];
//   h.appendChild(s);
//   (window as any).kommunicate = m;
//   m._globals = kommunicateSettings;
// })(document, (window as any).kommunicate || {});




console.log('Page Refresh/Browser restart');

   this.isLoggedIn = this.userObj.loggedIn;
  //  this.initializeKommunicate();
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
   console.log(this.user)
 }
 
//  initializeKommunicate(): void {
//   (function (d, m) {
//     var kommunicateSettings = {
//       appId: "732bd766a8aab28f105c066870aa0a75", // Replace with your Kommunicate App ID
//       popupWidget: true,
//       automaticChatOpenOnNavigation: true,
//     };
//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.async = true;
//     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//     var h = document.getElementsByTagName("head")[0];
//     h.appendChild(s);
//     (window as any).kommunicate = m;
//     m._globals = kommunicateSettings;
//   })(document, (window as any).kommunicate || {});
// }






retrieveUserData(sessionId : string){

  console.log("sessionId")
 const header = new HttpHeaders(
 
  {
 
 'X-Session-ID' : sessionId
 
 }
 
 );
 this.http.get<Iusers>('http://localhost:3000/validateSession',{headers:header}).subscribe( 
   (response:any)=>{ 
    console.log(response)
      //{isLoggedIn: true , user}
     //logic here upon receiving the response
     if(response.isLoggedIn){
       this.isLoggedIn = true;//for ngIf
       this.user = response.user;
       this.userObj.loggedIn = true;
       this.userObj.user = response.user;
       this.userexist=true;
       console.log("user is "+this.user)

     }else{
       this.isLoggedIn=false;
       this.userObj.loggedIn = false
     }
   })
}



// closeChatbotConversation(): void {
//   if (typeof Kommunicate !== 'undefined') {
//     Kommunicate.closeConversation(); // Close the current conversation
//   }
// }

// // Function to delete the chatbot conversation
// deleteChatbotConversation(): void {
//   if (typeof Kommunicate !== 'undefined') {
//     Kommunicate.deleteConversation(); // Delete the current conversation
//   }
// }

onLogOut(){

 this.cookieservice.delete('sessionId');
 this.cookieservice.delete('userId');
 this.user='';
 this.userObj.loggedIn=false;
 this.userObj.user ='';
 this.isLoggedIn = false;
 this.userexist=false;
//  this.closeChatbotConversation();
//  this.deleteChatbotConversation();
(window as any).Kommunicate.logout();

 this.router.navigate(['/login']);


}








// onGetusers(){
//   console.log("all users");
//   this.userObj.getUsers().subscribe((response: any)=>{
//     console.log("user response");
//     this.users=response
//   })
// }

// onGetbooks(){
//   console.log("all books");
//   this.userObj.getbooks().subscribe((response: any)=>{
//     console.log("books response");
//     this.books=response
//   })
// }


// onGetoverduebooks(){
//   console.log("all overdue books");
//   this.userObj.getoverduebooks().subscribe((response: any)=>{
//     console.log("over due books response");
//     this.overduebooks=response
//   })
// }





// onGetborrowedbooks(){
//   console.log("all borrowed books");
//   this.userObj.getborrowedbooks().subscribe((response: any)=>{
//     console.log(" borrow response");
//     this.borrowbooks=response
//   })
// }


//  delayTime = 86400000;



//  oncheckoverdue(){
//   for (let borrow of this.borrowbooks) {
//           if (new Date() > borrow.duedate) {

//             for (let overduebook of this.overduebooks) {


//             if(overduebook.borrow_id= borrow.borrow_id){
//               this.userObj.updatefine(borrow.borrow_id,{duedate:borrow.duedate}).subscribe((response: any) => {
//                 console.log(borrow.title + "was updated in overdue table");
//               });
//  }else{this.userObj.addOverdue(borrow).subscribe((response: any) => {
//   console.log(borrow.title + " was added to overdue table");
// });

//  }
//             }}}


//             const runOnCheckOverdue = () => {
//               this.oncheckoverdue(); 
            
//               setInterval(() => {
//                 this.oncheckoverdue();
//               }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
//             }
            
         
            // runOnCheckOverdue();





            

// oncheckoverdue(): void {
//   setTimeout(() => {
//     const currentDate = new Date();
//     for (let borrow of this.borrowbooks) {
//       if (currentDate > borrow.duedate) {
//           this.userObj.addOverdue(borrow).subscribe((response: any) => {
//           console.log(borrow.title + " was added to overdue table");
//         });
//       }
//     }
    
//     this.oncheckoverdue();
//   }, 86400000);
// }





          }
