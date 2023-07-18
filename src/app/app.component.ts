import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: any;
  books: any;
  borrowbooks: any;

  constructor(private userSrvObj: UserService) {

  }

onGetusers(){
  console.log("all users");
  this.userSrvObj.getUsers().subscribe((response: any)=>{
    console.log("user response");
    this.users=response
  })
}

onGetbooks(){
  console.log("all books");
  this.userSrvObj.getbooks().subscribe((response: any)=>{
    console.log("books response");
    this.books=response
  })
}

onGetborrowedbooks(){
  console.log("all borrowed books");
  this.userSrvObj.getborrowedbooks().subscribe((response: any)=>{
    console.log(" borrow response");
    this.borrowbooks=response
  })
}
  title = 'LMSP';
}
