import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NewbookComponent } from '../newbook/newbook.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NewsLetterComponent } from '../news-letter/news-letter.component';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  errorSignUpMessage: any;
  constructor(
    private http : HttpClient,
    private userSrvObj: UserService,
    private route : ActivatedRoute,
     private router : Router,
     public dialog: MatDialog
  ){}



fullname="";
address="";
phone="";
email="";
password="";
confirmpassword="";
dateofbirth="";
membership="";
position="";


onSignup(){
    console.log('sign up');
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
            this.router.navigate(['/login']);
          }else{
            this.errorSignUpMessage = result.message;
          }

        }, (err) => {
            console.log(err);
        })
      }else(this.errorSignUpMessage ='password and confirm password do not match')

      }


      openDialog(){
        const dialogRef = this.dialog.open(NewsLetterComponent, {
          height: '40rem',
          width: '20rem'
        });

        dialogRef.afterClosed().subscribe((result: any) => {
          console.log(`Dialog result: ${result}`);
        });
      }


}

