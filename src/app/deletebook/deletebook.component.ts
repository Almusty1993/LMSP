import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.scss']
})
export class DeletebookComponent {



  ngOnInit(): void {
    this.onDelete();



  }


  copytitle: any;
  copybookid: any;
  copyedition: any;
  copyauthor: any;
  copyimage: any;
  copycategory: any;
  copyavailablecopies: any;
  copycopynumber: any;
  copyyearpublish: any;
  copies: any;





  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<DeletebookComponent>
  ) {

    this.copybookid = data.book_id
  }


  onDelete() {





    this.userObj.fetchcopy(this.copybookid).subscribe((result: any) => {

      
      this.copies = result

    })


  }










  onDeletecopy(copy: any) {

    this.userObj.deleteBookcopy(copy.copy_id).subscribe((result) => {

      
    })


    this.dialogRef.close();
    this.router.navigate(['/books']);

  }





}
