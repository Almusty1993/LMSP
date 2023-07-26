// import { Component } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-borrower',
//   templateUrl: './borrower.component.html',
//   styleUrls: ['./borrower.component.scss']
// })
// export class BorrowerComponent {

//   constructor(private userObj : UserService){}

// }













import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent implements OnInit{
  users: any;
  isEditing= false
  fullname: any;
  email: any;
  phone: any;
  address: any;
  userid:any;

  constructor(private userObj : UserService,
    private router : Router, 
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute
    
    ){}
  


    onGetusers(){
      console.log("all users");
      this.userObj.getUsers().subscribe((response: any)=>{
        console.log("user response");
        this.users=response
        console.log(response)
        console.log(this.users)
      })
    }

    ngOnInit(): void {this.onGetusers();
   
      
      
    }



      


          onDelete(user: any) {
            console.log('delete icon click');
        
            this.userObj.deletePerson(user.user_id).subscribe((result) => {
        
              console.log('deleted !! ');
             ; 
        
            }) 
            this.onGetusers()
          }
        
          message: string = '';
        
        
        
          onUpdateuser(userid: any) {
                     
            this.isEditing = false;
            // this.fullname=user.fullname;
            //      this.email=user.email;
            //      this.phone=user.phone;
            //      this.address=user.address
          userid=this.userid
              
        
            console.log('update icon click');
    
          
                this.userObj.updateuser(userid, { fullname: this.fullname, phone:this.phone,email:this.email,address:this.address  }).subscribe((resut) => {
                console.log('updated !!!');
                this.onGetusers();
            })
 
          }
        

          
         

          onEdit(user:any){
            this.isEditing = true;
            this.fullname=user.fullname;
                 this.email=user.email;
                 this.phone=user.phone;
                 this.address=user.address
                 this.userid=user.user_id
              
              }
            }