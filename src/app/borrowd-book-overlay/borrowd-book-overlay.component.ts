import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-borrowd-book-overlay',
  templateUrl: './borrowd-book-overlay.component.html',
  styleUrls: ['./borrowd-book-overlay.component.scss']
})
export class BorrowdBookOverlayComponent {
  users: any;
  books: any;

  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}


  ngOnInit(): void {this.onGetborrow();
  
    
  }
  onGetborrow(){
    this.users= this.userObj.user
        console.log(this.users);
      this.userObj.onGetborrow(this.users[0].user_id).subscribe((response: any)=>{
        console.log(this.users[0].user_id)
        console.log("borrow list response");
        console.log(response)
       
        this.books=response
       
        console.log(this.books)
      })
    }
  
    
  }













