import { Component, Inject } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.scss']
})
export class BorrowbookComponent {









  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<BorrowbookComponent>
  ) {
    this.title = data.title,
    this.category = data.category,
    this.author = data.author,
    this.copynumber = data.copynumber,
    this.availablecopies = data.availablecopies,
    this.yearpublish = data.yearpublish,
    this.edition = data.edition,
    this.book_id = data.book_id,
    this.user_id = data.user_id
  }

  available = true;

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
  borrow_copy_id: any;
  sendborrow: any
  user_id: any;
  message: any
  borrows: any;
  position: any;


  ngOnInit(): void {
    this.onIf();


  }

  onIf() {
    if (this.data.availablecopies == 0) {
      this.message = "This book is currently unavailable. please check later"

      this.available = false;

    }
  }




 







  onborrow(book: any) {
    let borrows: number;
    let position: string;

    this.userObj.onfetchborrownumber(this.data.user_id).subscribe((response: any) => {
      borrows = response[0]?.count || 0;

    });

    this.userObj.onfetchmembership(this.data.user_id).subscribe((response: any) => {
      position = response[0].membership;


      if (position === 'free') {

       

        if (borrows > 3) {
          this.message = "Your membership does not allow borrowing more than 3 books";
        } else {
          this.userObj.onstatus(this.data.book_id).subscribe((statusResponse: any) => {
            const borrow_copy_id = statusResponse;
            const sendborrow = {
              title: this.data.title,
              copy_id: borrow_copy_id.copy_id,
              user_id: this.data.user_id
            };

            this.userObj.onborrow(sendborrow).subscribe(() => {
              this.dialogRef.close();
              this.router.navigate(['/userDashboard']);
            });
          });
        }
      } else {
        this.userObj.onstatus(this.data.book_id).subscribe((statusResponse: any) => {
          const borrow_copy_id = statusResponse;
          const sendborrow = {
            title: this.data.title,
            copy_id: borrow_copy_id.copy_id,
            user_id: this.data.user_id
          };

          this.userObj.onborrow(sendborrow).subscribe(() => {
            this.dialogRef.close();
            this.router.navigate(['/userDashboard']);
          });
        });
      }
    });
  }
}


