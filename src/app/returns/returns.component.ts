
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
  users: any;
  userpass: any;
  titlepass: any;
  borrowingdatepass: any;
  borrow_idpass: any;
  copy_idpass: any;
  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}

    ngOnInit(): void {
      //  this.onGetinnerjoin(this.user_id);
   
      
      
    }

user_id="";
copy_id="";







    onGetinnerjoin(){

  
console.log(this.copy_id)
      console.log("innerjoin");
      this.userObj.getinnerjoin(this.copy_id).subscribe((response: any)=>{
        console.log("innerjoin response");
        this.users=response
        console.log(response)
        console.log(this.users)

      })
   
    }







    onApprove(){
// users[0].user_id=this.userpass;
// user.title=this.titlepass;
// user.borrowingdate=this.borrowingdatepass
// user.borrow_id=this.borrow_idpass;
// user.copy_id=this.copy_idpass;



console.log(this.users[0].borrow_id)


      this.userObj.deleteoverdue(this.users[0].borrow_id).subscribe((response: any)=>{
        console.log("overdue deleted ");
      })
       this.userObj.deleteborrow(this.copy_id).subscribe((response: any)=>{
         console.log("borrow deleted ");
       })
      this.userObj.updatecopyavailabe(this.copy_id,{status:"available"}).subscribe((response: any)=>{

       console.log("changed availability ");
      })
      this.userObj.addhistory(this.users[0]).subscribe((response: any)=>{
        console.log(this.users[0])
        console.log("added to historyy ");
        this.users=[];
        this.router.navigate(['/returns']);
       
      })
      this.users=""
    
      this.router.navigate(['/returns']);
    }







 


    }



