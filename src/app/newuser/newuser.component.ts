import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent {
  errorSignUpMessage: any;


  constructor(private http : HttpClient,private userSrvObj: UserService,
    private route : ActivatedRoute,
    private dialogRef: MatDialogRef<NewuserComponent>,
     private router : Router,
         ){ 
 }
 

  fullname="";
  address="";
  phone="";
  email="";
  password="";
  confirmpassword="";
  dateofbirth="";
  membership="";
  position="";


  
onAdd(){

        const body={
       
  address:this.address,
  fullname:this.fullname,
  phone:this.phone,
  email:this.email,
  password:this.password,
  confirmpassword:this.confirmpassword,
  dateofbirth:this.dateofbirth,
  membership:this.membership,
  position:this.position}
  
  if(this.password == this.confirmpassword){
      this.userSrvObj.SignUp(body).subscribe((result : any) => {
        console.log(result);
        if(result.signUp){
          this.router.navigate(['/dashboard']);
          this.dialogRef.close(); 
        }else{
          this.errorSignUpMessage = result.message;
        }
      
      }, (err) => {
          console.log(err);
      })
    }else(this.errorSignUpMessage ='password and confirm passsword do not match')
  
    }
  
  
  
}

















