
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

    ngOnInit(): void {
      // this.onGetinnerjoin(this.user_id);
   
      
      
    }

user_id="";
copy_id="";






    // onGetinnerjoin(id:any){

    //   this.user_id=id

    //   console.log("innerjoin");
    //   this.userObj.getinnerjoin().subscribe((response: any)=>{
    //     console.log("user response");
    //     this.users=response
    //     console.log(response)
    //     console.log(this.users)
    //   })
    // }

    }



