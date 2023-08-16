import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iusers } from './user.model';
import { NavigationEnd } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'LMSP';






  users: any;
  books: any;
  borrowbooks: any;
  isLoggedIn = false;
  overduebooks: any;
  userexist: boolean = false;

  constructor(private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient

  ) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        this.retrieveData();
      }
    });

  }


  user: any = ""

  ngOnInit(): void {





    //   (function(d, m){
    //     var kommunicateSettings = 
    //         {"appId":"732bd766a8aab28f105c066870aa0a75","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //     (window as any).kommunicate = m; m._globals = kommunicateSettings;
    // })(document, (window as any).kommunicate || {});








    this.isLoggedIn = this.userObj.loggedIn;
    //  this.initializeKommunicate();
    const sessionId = this.cookieservice.get('sessionId');//cookie avalable in the browser.

    if (sessionId) {

      

      this.retrieveUserData(sessionId);











    }

  }
  retrieveData() {

 
    this.isLoggedIn = this.userObj.loggedIn;
    this.user = this.userObj.user;
 
  }








  retrieveUserData(sessionId: string) {

   
    const header = new HttpHeaders(

      {

        'X-Session-ID': sessionId

      }

    );
    this.http.get<Iusers>('http://localhost:3000/validateSession', { headers: header }).subscribe(
      (response: any) => {
       

        if (response.isLoggedIn) {
          this.isLoggedIn = true;
          this.user = response.user;
          this.userObj.loggedIn = true;
          this.userObj.user = response.user;
          this.userexist = true;
       

        } else {
          this.isLoggedIn = false;
          this.userObj.loggedIn = false
        }
      })
  }




  onLogOut() {

    if (this.user.position =="user") {
      (window as any).Kommunicate.logout();
    }
    this.cookieservice.delete('sessionId');
    this.cookieservice.delete('userId');
    this.user = '';
    this.userObj.loggedIn = false;
    this.userObj.user = '';
    this.isLoggedIn = false;
    this.userexist = false;




    this.router.navigate(['/login']);


  }









}
