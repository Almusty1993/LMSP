import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BorrowbookComponent } from '../borrowbook/borrowbook.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  users: any;
  books: any;
  recommands: any[]=[];
  latests :any[]=[];
  category:any;
title:any;
author:any;
  searchshow: boolean=false;
  searchresults: any[]=[];
  message: string=''
  otherlibraries=false;
  borrow_copy_id: any;
  sendborrow: any;


  constructor(private userObj : UserService,
    private router : Router, 
    private http : HttpClient,
    private route : ActivatedRoute, 
    public dialog: MatDialog
    
    ){}

    ngOnInit(): void {
      
      
      
      this.gethighcategory();
      this.ongetlatest();





      (function(d, m){
        var kommunicateSettings = 
            {"appId":"732bd766a8aab28f105c066870aa0a75","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});







   
    
    }
  

    gethighcategory(){
          console.log("highest category");
          this.users= this.userObj.user
          console.log(this.users);
        this.userObj.gethighcategory(this.users[0].user_id).subscribe((response: any)=>{
         
      
          console.log(response)
          console.log(response[0].category)
          this.books=response
          console.log(this.books)



  console.log(this.books[0].category)
   console.log("recommand");

  if(this.books[0].category){
   this.userObj.getrecommand(this.books[0].category).subscribe((response: any)=>{
 

//   console.log(response)
    this.recommands=response
 console.log(this.recommands)
 })
}
})









    }
  
  
    onAddwishlist(recommand:any){


this.userObj.addwishlist({book_id:recommand.book_id,user_id:this.users[0].user_id}).subscribe((response: any)=>{
        console.log(response)
        console.log("added to wwishlist ");



    })
  }
  
  
  
  
  
  
  
  
  
  onsearch(){

console.log(this.title+this.author+this.category)

this.userObj.resultsearch(this.title,this.author,this.category).subscribe((response: any)=>{

        console.log(response)
        console.log("result of search ");
        this.searchresults=response
if(this.searchresults.length==0){
 this.otherlibraries=true;
  this.message=" This book does not exist in our library, please search other libraries"
}


    })
this.searchshow=true;

  }
  
  





onborrow(book:any){




  this.userObj.onstatus({book_id:book.book_id}).subscribe((response: any)=>{
    console.log(response)

    this.borrow_copy_id=response



})


this.sendborrow={
  title:book.title,
  copy_id:this.borrow_copy_id,
  user_id:this.users[0].user_id

}


  this.userObj.onborrow(this.sendborrow).subscribe((response: any)=>{
    console.log(response)
    console.log("added to borrow ");



})

}


openDialog(book:any){
  const dialogRef = this.dialog.open(BorrowbookComponent, {
    height: '50rem',
    width: '40rem',
    data: {
      user_id:this.users[0].user_id,
      title:book.title,
    category:book.category,
   author:book.author,
   copynumber:book.copynumber,
   availablecopies:book.availablecopies,
   yearpublish:book.yearpublish,
   edition:book.edition,
    book_id:book.book_id}
  });

  dialogRef.afterClosed().subscribe((result: any) => {
  
  });
}




ongetlatest(){

  this.userObj.onlatest().subscribe((response: any)=>{
    console.log(response)
    console.log("latest ");
this.latests=response

})}






  
  
  }













