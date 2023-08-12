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
  books: any[]=[];
  currentRating:any


  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

  
  ngOnInit(): void {this.onGethistory();
  
    
  }

users:any=[]
rate:any




  onGethistory(){
    this.users= this.userObj.user
        console.log(this.users);
      this.userObj.onGethistory(this.users[0].user_id).subscribe((response: any)=>{
        console.log(this.users[0].user_id)
        console.log("wish list response");
        console.log(response)
  
        this.books=response
    
      })
    }
  
    





    onRate(book:any){

      this.userObj.onrate({user_id:this.users[0].user_id,book_id:book.book_id,rate:this.rate}).subscribe((response: any)=>{
      this.rate=""
     
   
     
      })




    }












    
  }



