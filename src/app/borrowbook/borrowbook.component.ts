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
  ) {this.title=data.title,
  this.category=data.category,
  this.author=data.author,
  this.copynumber=data.copynumber,
  this.availablecopies=data.availablecopies,
  this.yearpublish=data.yearpublish,
  this.edition=data.edition,
  this.book_id=data.book_id,
  this.user_id=data.user_id
   }

available=true;
  
  title: any;
  author: any;
  category: any;
  edition: any;
  copynumber: any;
  availablecopies: any;
  yearpublish:any;
  book_id: any;
  selectedFile: any;
book:any;
bookid:any;
  borrow_copy_id: any;
  sendborrow: any
  user_id: any;
  message: any


   
  ngOnInit(): void {this.onIf();
  
 
  }

  onIf(){
    if(this.data.availablecopies==0){
      this.message= "This book is currently unavailable. please check later"
    
      this.available=false;

  }}


//    onborrow(book:any){


// // if(this.data.availablecopies==0){
// //   this.message= "This book is currently unavailable. please check later"

// //   this.available=false;

// // }else{
// console.log(this.data.book_id)
//     this.userObj.onstatus(this.data.book_id).subscribe((response: any)=>{
//       console.log(response)
  
//       this.borrow_copy_id=response
//       console.log(this.borrow_copy_id.copy_id)
  
  
  
//   })
  
  
//   this.sendborrow={
//     title:book.title,
//     copy_id:this.borrow_copy_id.copy_id,
//     user_id:this.user_id
  
//   }
  
  
//     this.userObj.onborrow(this.sendborrow).subscribe((response: any)=>{
//       console.log(response)
//       console.log('updated !!!');
          
//     }
//       )
//       this.dialogRef.close(); 
//       this.router.navigate(['/books']);
// }



onborrow(book: any) {


  this.userObj.onstatus(this.data.book_id).subscribe((response: any) => {
    console.log(response);
    this.borrow_copy_id = response;
    console.log(this.borrow_copy_id.copy_id);

   
    this.sendborrow = {
      title: this.data.title,
      copy_id: this.borrow_copy_id.copy_id,
      user_id: this.data.user_id
    };

    this.userObj.onborrow(this.sendborrow).subscribe((response: any) => {
      console.log(response);
      console.log('updated !!!');
      this.dialogRef.close(); 
      this.router.navigate(['/userDashboard']); 
    });
  });
}
}


