import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {


  user: any = "";
  login_email = '';
  login_password = '';
  message = "";


  constructor(
    private http: HttpClient,
    private userSrvObj: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService
  ) {

  }
  new_email: any = '';
  loggedIn: boolean = false;
  currentUser: any = '';
  errorMessage: string = '';
  errorSignUpMessage: string = '';

  onLogIn() {

    const body = {
      email: this.login_email,
      password: this.login_password
    }

    this.userSrvObj.LogIn(body).subscribe((result: any) => {
    
      if (result.login == true) {
        this.currentUser = result.user;
        this.userSrvObj.loggedIn = true;
        this.loggedIn = true;

        this.userSrvObj.user = result.user;
        this.message = result.message;
        
        this.cookieService.set('sessionId', result.sessionId);
  

        if (result.user[0].position == 'admin') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/userDashboard']);
        }

      } else {
        this.userSrvObj.loggedIn = false;
        this.errorMessage = result.message;
      }
    }, (err: any) => {
     
      this.userSrvObj.loggedIn = false;
      this.loggedIn = false;
      this.errorMessage = 'Invalid';

    })

  }







  passwordReset = false;

  onResetPwd() {
    this.passwordReset = true;
  }




  onResetPassword(email: any) {

    email = this.new_email;
 
    this.userSrvObj.updatename(email).subscribe((resut: any) => {
     
this.new_email="";
this.message="Your new password has been sent to your email"
    })
  }






  displayLogIn() {
    this.passwordReset = false;
  }

}

