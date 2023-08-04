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



  ngOnInit(): void {this.onDelete();
   
      
      
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
  //   this.title=data.title,
  // this.category=data.category,
  // this.author=data.author,
  // this.copynumber=data.copynumber,
  // this.availablecopies=data.availablecopies,
  // this.yearpublish=data.yearpublish,
  // this.edition=data.edition,
  this.copybookid=data.book_id
   }


  onDelete() {
   



    //  this.copytitle=book.title;
    //  this.copycategory=book.category;
    // this. copybookid=book.book_id;
    // this. copyedition=book.edition;
    // this. copyauthor=book.author;
    // this. copycopynumber=book.copynumber;
    // this. copyavailablecopies=book.availablecopies;
    // this. copyimage=book.image
    // this.copyyearpublish=book.yearpublish

      this.userObj.fetchcopy(this.copybookid).subscribe((result: any) => {
  
        console.log('copy fetched !! ');
        this.copies=result
               
      })


    }










    onDeletecopy(copy: any){
            
      this.userObj.deleteBookcopy(copy.copy_id).subscribe((result) => {

     console.log(' copy deleted !! ');
           })

  
           this.dialogRef.close(); 
    this.router.navigate(['/books']);

     }
 




}
