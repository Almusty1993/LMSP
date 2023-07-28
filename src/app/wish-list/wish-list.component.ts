import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  books: any;



  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

  
  ngOnInit(): void {this.onGethwishlist();
  
     this.users=this.userObj.user
  }

users:any=[]




  onGethwishlist(){
    //     console.log("all wishlist");
    //   this.userObj.getwishlist(this.users[0].user_id).subscribe((response: any)=>{
    //     console.log("wish list response");
    //     this.books=response
    //     console.log(response)
    //     console.log(this.books)
    //   })
    // }
 
  }


}















