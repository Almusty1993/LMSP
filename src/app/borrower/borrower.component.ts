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

import { MatDialog } from '@angular/material/dialog';
import { AddBorrowerComponent } from './modal/add-borrower/add-borrower.component';
import { EditBorrowerComponent } from './modal/edit-borrower/edit-borrower.component';
import { NewuserComponent } from '../newuser/newuser.component';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent {



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
    private route : ActivatedRoute,
    public dialog: MatDialog
    
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
              this.router.navigate(['/borrower']);
             ; 
        
            }) 
            this.onGetusers()
          }
        
          message: string = '';
        
        
        
          onUpdateuser(userid: any) {
                     
            this.isEditing = false;
            console.log(userid)
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
            this.onGetusers();  
               this.router.navigate(['/borrower']);
          }
        

          
         

          onEdit(user:any){
            this.isEditing = true;
            this.fullname=user.fullname;
                 this.email=user.email;
                 this.phone=user.phone;
                 this.address=user.address
                 this.userid=user.user_id
              
              }



          










            


      openDialog(){
        const dialogRef = this.dialog.open(AddBorrowerComponent, {
          height: '50rem',
          width: '40rem'
        });

        dialogRef.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });
      }


      editBorrowerModal(data:any){

        const dialogRef = this.dialog.open(EditBorrowerComponent, {
          height: '50rem',
          width: '40rem',
          data: data
        });

        dialogRef.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });



      }




      openDialog2(){
        console.log("hit")
        const dialogRef2 = this.dialog.open(NewuserComponent, {
          height: '50rem',
          width: '40rem'
        });

        dialogRef2.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });
      }
    

}








