import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<EditbookComponent>
  ) {
    this.title = data.title,
    this.category = data.category,
    this.author = data.author,
    this.copynumber = data.copynumber,
    this.availablecopies = data.availablecopies,
    this.yearpublish = data.yearpublish,
    this.edition = data.edition,
    this.book_id = data.book_id
  }




  title: any;
  author: any;
  category: any;
  edition: any;
  copynumber: any;
  availablecopies: any;
  yearpublish: any;
  book_id: any;
  selectedFile: any;
  book: any;
  bookid: any;


  onFileSeleceted(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }



  onUpdateBooks(book_id: any) {




    const formData = new FormData();

    book_id = this.book_id;



    formData.append('book_id', this.book_id);
    formData.append('title', this.title);
    formData.append('category', this.category);
    formData.append('edition', this.edition);
    formData.append('author', this.author);
    formData.append('copynumber', this.copynumber);
    formData.append('availablecopies', this.availablecopies);
    formData.append('yearpublish', this.yearpublish);
    formData.append('image', this.selectedFile);
    
    this.userObj.updatebook(formData)
      .subscribe((res: any) => {
      

      }
      )
    this.dialogRef.close();
    this.router.navigate(['/books']);
  }

}
