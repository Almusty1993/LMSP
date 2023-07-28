import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-history',
  templateUrl: './book-history.component.html',
  styleUrls: ['./book-history.component.scss']
})
export class BookHistoryComponent {
  books: any;



  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

  
  ngOnInit(): void {this.onGethistory();
  
    
  }

users:any=[]




  onGethistory(){
    this.users= this.userObj.user
        console.log(this.users);
      this.userObj.onGethistory(this.users[0].user_id).subscribe((response: any)=>{
        console.log(this.users[0].user_id)
        console.log("wish list response");
        console.log(response)
        console.log(response[0].yearpublish)
        this.books=response
        console.log(response)
        console.log(this.books)
      })
    }
  
    
  }



