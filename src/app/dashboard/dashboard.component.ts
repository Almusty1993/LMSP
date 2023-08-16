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

  users: any[] = []
  books: any[] = []

  star = 1
  end = 8
  borrowbooks: any[] = []
  overduebooks: any[] = []
  numberusers: any;
  numberbooks: any;
  numberoverdue: any;
  numberborrowed: any;






  currentDate = new Date();
  constructor(private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }


  ngOnInit(): void {
    this.onGetusers();
    this.onGetbooks();
    this.onGetborrowedbooks();
    this.onGetoverduebooks();
    
  }




  onGetusers() {
    
    this.userObj.getUsers().subscribe((response: any) => {
      
      this.users = response
   
      this.numberusers = this.users.length
    })
  }


  onGetbooks() {
    
    this.userObj.getbooks().subscribe((response: any) => {
     
      this.books = response
      this.numberbooks = this.books.length
    })
  }

  onGetoverduebooks() {
    
    this.userObj.getoverduebooks().subscribe((response: any) => {
    
      this.overduebooks = response;
      this.numberoverdue = this.overduebooks.length
    })
  }





  onGetborrowedbooks() {
   
    this.userObj.getborrowedbooks().subscribe((response: any) => {
   
      this.borrowbooks = response
     
      this.numberborrowed = this.borrowbooks.length
    })
  }











  openDialog() {
    const dialogRef = this.dialog.open(NewbookComponent, {
      height: '50rem',
      width: '40rem'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  openDialog2() {
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
