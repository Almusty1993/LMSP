import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.scss']
})
export class NewbookComponent {


  constructor(private userObj : UserService,
    private router : Router,
    private cookieservice: CookieService,
    private http : HttpClient,
    private route : ActivatedRoute,
    private dialogRef: MatDialogRef<NewbookComponent>

    ){}

  selectedFile: any;
  title: any;
  author: any;
  category: any;
  edition: any;
  copynumber: any;
  availablecopies: any;
  yearpublish:any;

  onFileSeleceted(event :any){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile)
  }

onAdd() {
  const formData = new FormData();
  this.copynumber = 1;
  this.availablecopies = 1;

  formData.append('title', this.title);
  formData.append('category', this.category);
  formData.append('edition', this.edition);
  formData.append('author', this.author);
  formData.append('copynumber', this.copynumber);
  formData.append('availablecopies', this.availablecopies);
  formData.append('image', this.selectedFile);
  formData.append('yearpublish', this.yearpublish);

  console.log(formData);

  this.userObj.onAdd(formData).subscribe(
    (res: any) => {
      console.log('Added !!!');
      this.dialogRef.close();
      this.router.navigate(['/dashboard']);
    },
    (error) => {
      console.error('Error adding book:', error);
    }
  );
  this.dialogRef.close();
  this.router.navigate(['/dashboard']);


}

}
