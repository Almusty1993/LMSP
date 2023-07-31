import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],

})

export class LogInComponent {

  loginForm! : FormGroup;


  user:any="";
  login_email = '';
  login_password = '';
  message="";


  constructor(
    private http : HttpClient,
    private userSrvObj: UserService,
     private route : ActivatedRoute,
      private router : Router,
       private cookieService:CookieService,
       private formBuilder: FormBuilder
       ){


  }
  new_email : any = '';
  loggedIn : boolean = false;
  currentUser : any = '';
  errorMessage : string = '';
  errorSignUpMessage : string = '';

  ngOnInit(): void {

   this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });

  }



  onLogIn(){

console.log(this.loginForm.value)

    const body = {
      email : this.login_email,
      password : this.login_password
    }

    this.userSrvObj.LogIn(this.loginForm.value).subscribe((result : any) => {
      console.log(result);
      if(result.login == true){
        this.currentUser=result.user;
       this.userSrvObj.loggedIn = true;
       this.loggedIn = true;

          this.userSrvObj.user = result.user;
          this.message=result.message;
        console.log('session id is '+ result.sessionId);
        this.cookieService.set('sessionId',result.sessionId);
        console.log(result.sessionId)
        this.cookieService.set('userId',result.user_id);
        this.cookieService.set('useremail',result.email);


          this.router.navigate(['/dashboard']);
      }else{
        this.userSrvObj.loggedIn = false;
        this.errorMessage = result.message;
      }
    }, (err: any) => {
        console.log(err);
        this.userSrvObj.loggedIn = false;
        this.loggedIn = false;
        this.errorMessage = 'Invalid';

    })

  }









  passwordReset = false;

  onResetPwd(){
    this.passwordReset = true;}




    onResetPassword(email:any){
    email=this.new_email;
    console.log(email)
    this.userSrvObj.updatename(email).subscribe((resut:any) => {
      console.log('updated !!!');

  })
}






  displayLogIn(){
    this.passwordReset = false;
  }

}

