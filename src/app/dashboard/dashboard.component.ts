// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent {

// }














import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddBorrowerComponent } from '../borrower/modal/add-borrower/add-borrower.component';
import { NewbookComponent } from '../newbook/newbook.component';
import { NewuserComponent } from '../newuser/newuser.component';

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
  numberusers: any;
  numberbooks: any;
  numberoverdue: any;
  numberborrowed: any;
  
 




  currentDate = new Date();
  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute,
    public dialog: MatDialog
    
    ){}


    ngOnInit(): void {
      this.onGetusers();
      this.onGetbooks();
      this.onGetborrowedbooks();
      this.onGetoverduebooks();
      this.oncheckoverdue();
  
      // Call the function every 24 hours
      setInterval(() => {
        this.oncheckoverdue();
      }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }




onGetusers(){
  console.log("all users");
  this.userObj.getUsers().subscribe((response: any)=>{
    console.log("user response");
    this.users=response
    console.log(response)
    console.log(this.users)
    this.numberusers=this.users.length
  })
}


onGetbooks(){
  console.log("all books");
  this.userObj.getbooks().subscribe((response: any)=>{
    console.log("books response");
    this.books=response
    this.numberbooks=this.books.length
  })
}

onGetoverduebooks(){
  console.log("all overdue books");
  this.userObj.getoverduebooks().subscribe((response: any)=>{
    console.log("over due books response");
    this.overduebooks=response;
    this.numberoverdue=this.overduebooks.length
  })
}





onGetborrowedbooks(){
  console.log("all borrowed books");
  this.userObj.getborrowedbooks().subscribe((response: any)=>{
    console.log(" borrow response");
    this.borrowbooks=response
    console.log(response)
    this.numberborrowed=this.borrowbooks.length
  })
}


 



 oncheckoverdue(){
  for (let borrow of this.borrowbooks) {
          if (new Date() > borrow.duedate) {

            for (let overduebook of this.overduebooks) {


            if(overduebook.borrow_id= borrow.borrow_id){

console.log(" book already exist in overdue ")

              // this.userObj.updatefine(borrow.borrow_id,{duedate:borrow.duedate}).subscribe((response: any) => {
              //   console.log(borrow.title + "was updated in overdue table");
              // });
 }else{this.userObj.addOverdue(borrow).subscribe((response: any) => {
  console.log(borrow.title + " was added to overdue table");
  this.overduebooks=response
});

 }
            }}}


          }
        
        
      

        
        
        
        
        
          openDialog(){
            const dialogRef = this.dialog.open(NewbookComponent, {
              height: '50rem',
              width: '40rem'
            });
    
            dialogRef.afterClosed().subscribe((result: any) => {
              console.log(`Dialog result: ${result}`);
            });
          }
        

          openDialog2(){
            console.log("hit")
            const dialogRef2 = this.dialog.open(NewuserComponent, {
              height: '50rem',
              width: '40rem'
            });
    
            dialogRef2.afterClosed().subscribe((result: any) => {
              console.log(`Dialog result: ${result}`);
            });
          }
        
        
        
        
        
        
        
        
        
        
        
        }
