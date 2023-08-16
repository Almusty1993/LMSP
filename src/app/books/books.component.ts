import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditbookComponent } from '../editbook/editbook.component';
import { DeletebookComponent } from '../deletebook/deletebook.component';
import { NewbookComponent } from '../newbook/newbook.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: any[] = [];
  selectedFile: any;
  title: any;
  author: any;
  category: any;
  edition: any;
  copynumber: any;
  availablecopies: any;
  bookid: any;
  deletecopy = false;
  copies: any;
  book_id: any;
  copytitle: any;
  copybookid: any;
  copyedition: any;
  copyauthor: any;
  copyimage: any;
  copycategory: any;
  copyavailablecopies: any;
  copycopynumber: any;
  isupdate = false;
  main = true;
  edit = false;
  copyyearpublish: any;

  constructor(private userObj: UserService,
    private router: Router,
    private cookieservice: CookieService,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog

  ) { }


  onGetBooks() {
   
    this.userObj.getbooks().subscribe((response: any) => {
    
      this.books = response
    
    })
  }

  ngOnInit(): void {
    this.onGetBooks();



  }

  isEditing = false;





  onDelete(book: any) {
    this.deletecopy = true;
    this.main = false;


    this.copytitle = book.title;
    this.copycategory = book.category;
    this.copybookid = book.book_id;
    this.copyedition = book.edition;
    this.copyauthor = book.author;
    this.copycopynumber = book.copynumber;
    this.copyavailablecopies = book.availablecopies;
    this.copyimage = book.image
    this.copyyearpublish = book.yearpublish

    this.userObj.fetchcopy(book.book_id).subscribe((result: any) => {

   
      this.copies = result

    })




  }




  onDeletecopy(copy: any) {

    this.userObj.deleteBookcopy(copy.copy_id).subscribe((result) => {

     
    })


    this.deletecopy = false;
    this.main = true;
    this.onGetBooks();
    this.router.navigate(['/books']);

  }

  onDeletewhole(book: any) {

    this.deletecopy = true;
    this.userObj.deleteBook(book.book_id).subscribe((result) => {

   


    })

    this.userObj.deletewholecopyBook(book.book_id).subscribe((result) => {

     

      this.deletecopy = false

    })
    this.onGetBooks();
    this.router.navigate(['/books']);


  }



  onFileSeleceted(event: any) {
    this.selectedFile = event.target.files[0];
  
  }







  openDialog(book: any) {

    const dialogRef = this.dialog.open(EditbookComponent, {
      height: '50rem',
      width: '40rem',
      data: {
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



  openDialog2(book: any) {

    const dialogRef = this.dialog.open(DeletebookComponent, {
      height: '50rem',
      width: '40rem',
      data: {

        book_id: book.book_id
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
  
    });
  }


  openDialog3() {
    const dialogRef = this.dialog.open(NewbookComponent, {
      height: '50rem',
      width: '40rem'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    
    });
  }
}