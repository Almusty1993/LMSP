import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
users: any;
books:any;

star=1
end=8
  borrowbooks: any;
  overduebooks: any;

  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}



  ngOnInit(): void {this.onGetusers();
    this.onGetbooks()
    this.onGetborrowedbooks()
    this.onGetoverduebooks()
    this.oncheckoverdue()
    
    
    
  }




onGetusers(){
  console.log("all users");
  this.userObj.getUsers().subscribe((response: any)=>{
    console.log("user response");
    this.users=response
    console.log(response)
    console.log(this.users)
  })
}


onGetbooks(){
  console.log("all books");
  this.userObj.getbooks().subscribe((response: any)=>{
    console.log("books response");
    this.books=response
  })
}

onGetoverduebooks(){
  console.log("all overdue books");
  this.userObj.getoverduebooks().subscribe((response: any)=>{
    console.log("over due books response");
    this.overduebooks=response
  })
}





onGetborrowedbooks(){
  console.log("all borrowed books");
  this.userObj.getborrowedbooks().subscribe((response: any)=>{
    console.log(" borrow response");
    this.borrowbooks=response
    console.log(response)
  })
}


 delayTime = 86400000;



 oncheckoverdue(){
  for (let borrow of this.borrowbooks) {
          if (new Date() > borrow.duedate) {

            for (let overduebook of this.overduebooks) {


            if(overduebook.borrow_id= borrow.borrow_id){
              this.userObj.updatefine(borrow.borrow_id,{duedate:borrow.duedate}).subscribe((response: any) => {
                console.log(borrow.title + "was updated in overdue table");
              });
 }else{this.userObj.addOverdue(borrow).subscribe((response: any) => {
  console.log(borrow.title + " was added to overdue table");
  this.overduebooks=response
});

 }
            }}}


          }}
