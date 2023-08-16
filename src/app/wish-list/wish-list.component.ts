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
  books: any[] = [];
  message: string = ""



  constructor(private userObj: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute

  ) { }


  ngOnInit(): void {

    this.users = this.userObj.user
    this.onGethwishlist();
  }

  users: any = []




  onGethwishlist() {

   
    this.userObj.getwishlist(this.users[0].user_id).subscribe((response: any) => {
     
      this.books = response
   
      if (this.books.length == 0) {
        this.message = "your wish list is empty"
      }
    })
  }



  onDelete(id: any) {


    

    this.userObj.deletewishlist(id).subscribe((result: any) => {


      this.onGethwishlist()
      this.router.navigate(['/wishList']);

    })


    this.onGethwishlist()
    this.router.navigate(['/wishList']);



  }











}

















