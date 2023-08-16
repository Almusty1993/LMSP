import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {


  constructor(private userObj : UserService,
    private router : Router,
    private http : HttpClient,
    private route : ActivatedRoute,
    private dialogRef: MatDialogRef<NewsletterComponent>

    ){}

    email : any;

    onSubscribe() {


  const formData = new FormData();

  formData.append('email', this.email);

 

  
  this.dialogRef.close();
  this.router.navigate(['/login']);


    }


}
















