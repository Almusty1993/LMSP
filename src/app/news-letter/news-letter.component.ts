import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent {

  constructor(private userObj : UserService,
    private router : Router,
    private http : HttpClient,
    private route : ActivatedRoute,
    private dialogRef: MatDialogRef<NewsLetterComponent>

    ){}

    email : any;

    onSubscribe() {


  const formData = new FormData();

  formData.append('email', this.email);

  console.log(formData);

  this.userObj.onAdd(formData).subscribe(
    (res: any) => {
      console.log('Added !!!');
      this.dialogRef.close();
      this.router.navigate(['/signup']);
    },
    (error) => {
      console.error('Error Subscribing to email', error);
    }
  );
  this.dialogRef.close();
  this.router.navigate(['/signup']);


    }


}
