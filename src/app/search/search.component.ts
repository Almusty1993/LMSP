import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BorrowbookComponent } from '../borrowbook/borrowbook.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {






  category: any;
  title: any;
  author: any;
  searchresults: any[] = [];
  otherlibraries = false;
  message: any;
  searchshow = false;
  users: any;
  books: any[] = [];
  recommands: any[] = [];

  constructor(private userObj: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }

  onsearch() {

    this.message = "";
    this.otherlibraries = false;


    this.userObj.resultsearch(this.title, this.author, this.category).subscribe((response: any) => {


      this.searchresults = response
      this.gethighcategory()
      if (this.searchresults.length == 0) {
        this.otherlibraries = true;
        this.message = " This book does not exist in our library, please search other libraries"
      }


    })
    this.searchshow = true;


  }



  ngOnInit(): void {



    // this.gethighcategory();
  }





  gethighcategory() {
    
    this.users = this.userObj.user
    
    this.userObj.gethighcategory(this.users[0].user_id).subscribe((response: any) => {



      if (response.length > 0) {
        this.books = response







        if (this.books[0].category) {
          this.userObj.getrecommand(this.books[0].category).subscribe((response: any) => {

            this.recommands = response
         
          })
        }
      } else {
        this.userObj.getrecommand(this.searchresults[0].category).subscribe((response: any) => {

          this.recommands = response
        
        })
      }
    })
  }





  openDialog(book: any) {
    const dialogRef = this.dialog.open(BorrowbookComponent, {
      height: '50rem',
      width: '40rem',
      data: {
        user_id: this.users[0].user_id,
        title: book.title,
        category: book.category,
        author: book.author,
        copynumber: book.copynumber,
        availablecopies: book.availablecopies,
        yearpublish: book.yearpublish,
        edition: book.edition,
        book_id: book.book_id
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }




  onAddwishlist(recommand: any) {


    this.userObj.addwishlist({ book_id: recommand.book_id, user_id: this.users[0].user_id }).subscribe((response: any) => {
  



    })
  }



}
