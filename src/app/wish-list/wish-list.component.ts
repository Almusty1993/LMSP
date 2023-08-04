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
  message: string=""



  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

  
  ngOnInit(): void {
  
     this.users=this.userObj.user
     this.onGethwishlist();
  }

users:any=[]




  onGethwishlist(){
        console.log("all wishlist");
      this.userObj.getwishlist(this.users[0].user_id).subscribe((response: any)=>{
        console.log("wish list response");
        this.books=response
        console.log(response)
        console.log(this.books)
                if(this.books.length==0){
          this.message="your wish list is empty"
        }
      })
    }
 

    
      onDelete(id: any) {
      
     
       console.log(id)

          this.userObj.deletewishlist(id).subscribe((result: any) => {
      
            console.log('book was deleted from wish list ');

            this.onGethwishlist()
        this.router.navigate(['/wishList']);
                   
          })
        
          
          this.onGethwishlist()
        this.router.navigate(['/wishList']);

        

    }











  }

















