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

  constructor(private userSrvObj: UserService) {

  }

onGetusers(){
  console.log("all users");
  this.userSrvObj.getUsers().subscribe((response: any)=>{
    console.log("response");
    this.users=response
  })
}

onGetbooks(){
  console.log("all books");
  this.userSrvObj.getbooks().subscribe((response: any)=>{
    console.log("response");
    this.books=response
  })
}


  title = 'LMSP';
}
