import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { BorrowbookComponent } from '../borrowbook/borrowbook.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {


  images = [
    { src: 'assets/a.jpg', alt: 'Image 1' },
    { src: 'assets/b.jpg', alt: 'Image 2' },
    { src: 'assets/c.jpg', alt: 'Image 3' },
  ];
  users: any;
  books: any;
  recommands: any[] = [];
  latests: any[] = [];
  category: any;
  title: any;
  author: any;
  searchshow: boolean = false;
  searchresults: any[] = [];
  message: string = ''
  otherlibraries = false;
  borrow_copy_id: any;
  sendborrow: any;
  Choices: any[] = [];


  constructor(private userObj: UserService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    public dialog: MatDialog,


  ) { }

  ngOnInit(): void {
    this.users = this.userObj.user
    this.ongetlatest();
    this.ontopchioce();







    (function (d, m) {
      var kommunicateSettings =
        { "appId": "732bd766a8aab28f105c066870aa0a75", "popupWidget": true, "automaticChatOpenOnNavigation": true };
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});









  }



  ongetlatest() {
    this.users = this.userObj.user
   
    this.userObj.onlatest().subscribe((response: any) => {


      this.latests = response

    })
  }








  gethighcategory() {
    this.users = this.userObj.user
    

   
    this.userObj.gethighcategory(this.users[0].user_id).subscribe((response: any) => {


     
      this.books = response
      



   
      if (this.books[0].category) {
        this.userObj.getrecommand(this.books[0].category).subscribe((response: any) => {


        
          this.recommands = response
        
        })
      }
    })









  }


  onAddwishlist(recommand: any) {


    this.users = this.userObj.user


    this.userObj.addwishlist({ book_id: recommand.book_id, user_id: this.users[0].user_id }).subscribe((response: any) => {
  



    })
  }





  ontopchioce() {

    this.userObj.ontopchioce().subscribe((response: any) => {
    

      this.Choices = response

    })
  }

















  onborrow(book: any) {




    this.userObj.onstatus({ book_id: book.book_id }).subscribe((response: any) => {
    

      this.borrow_copy_id = response



    })


    this.sendborrow = {
      title: book.title,
      copy_id: this.borrow_copy_id,
      user_id: this.users[0].user_id

    }


    this.userObj.onborrow(this.sendborrow).subscribe((response: any) => {




    })

  }











  openDialog(book: any) {
    this.users = this.userObj.user
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












}













