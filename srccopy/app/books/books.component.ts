import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: any;
  selectedFile: any;
  title: any;
  author: any;
  category: any;
  edition: any;
  copynumber: any;
  availablecopies: any;
  bookid: any;
  deletecopy=false;
  copies:any;
  book_id:any;
  copytitle: any;
  copybookid: any;
  copyedition: any;
  copyauthor: any;
  copyimage: any;
  copycategory: any;
  copyavailablecopies: any;
  copycopynumber: any;
  isupdate=false;
  main=true;
  edit=false;

  constructor(private userObj : UserService,
        private router : Router, 
        private cookieservice: CookieService,
        private http : HttpClient,
        private route : ActivatedRoute
        
        ){}


    onGetBooks(){
      console.log("all users");
      this.userObj.getbooks().subscribe((response: any)=>{
        console.log("user response");
        this.books=response
        console.log(response)
        console.log(this.books)
      })
    }

    ngOnInit(): void {this.onGetBooks();
   
      
      
    }

    isEditing=false;





          onDelete(book: any) {
          this. deletecopy=true;
          this.main=false;


           this.copytitle=book.title;
           this.copycategory=book.category;
          this. copybookid=book.book_id;
          this. copyedition=book.edition;
          this. copyauthor=book.author;
          this. copycopynumber=book.copynumber;
          this. copyavailablecopies=book.availablecopies;
          this. copyimage=book.image

            this.userObj.fetchcopy(book.book_id).subscribe((result: any) => {
        
              console.log('copy fetched !! ');
              this.copies=result
                     
            })
          
            
          

          }




          onDeletecopy(copy: any){
            
             this.userObj.deleteBookcopy(copy.copy_id).subscribe((result) => {
      
            console.log(' copy deleted !! ');
                  })


          //  this.userObj.updatecopynumber(copy.book_id).subscribe((result) => {
      
            // console.log(' copynumber updated !! ');
            
            //  this.deletecopy=false
          //  })
           this.deletecopy=false;
           this.main=true;
           this.onGetBooks(); 
           this.router.navigate(['/books']);

            }
        
          onDeletewhole(book: any) {
            console.log('delete icon click');
            this.deletecopy=true;
            this.userObj.deleteBook(book.book_id).subscribe((result) => {
        
              console.log('deleted !! ');
            

            })

            this.userObj.deletewholecopyBook(book.book_id).subscribe((result) => {
        
              console.log('deleted !! ');
            
              this.deletecopy=false

            })
               this.onGetBooks();   
                this.router.navigate(['/books']);
               
               
          }
        
        

  onFileSeleceted(event :any){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile)
  }
        
        
            


  onUpdateBooks(book_id:any){

            this.deletecopy=false
            console.log(book_id)
            
             
            const formData = new FormData();
            
            book_id=this.book_id;
            
                   
            
              formData.append('book_id',this.book_id);
              formData.append('title',this.title);
              formData.append('category',this.category);
              formData.append('edition',this.edition);
              formData.append('author',this.author);
              formData.append('copynumber',this.copynumber);
              formData.append('availablecopies',this.availablecopies);
              formData.append('image',this.selectedFile);
              console.log(formData)
               this.userObj.updatebook(formData)
                   .subscribe((res:any)=>{
                    console.log('updated !!!');
                    this.onGetBooks();
                    this.router.navigate(['/books']);
                  }
                    )
                    this.isEditing=false;
            
                    this.router.navigate(['/books']);
            }
         

          onEdit(book:any){
            this.main = false;
            this.edit=true;
            this.book_id=book.book_id
                 this.title=book.title;
                 this.author=book.author;
                 this.category=book.category;
                 this.edition=book.edition
                 this.copynumber=book.copynumber;
                 this.availablecopies=book.availablecopies;
               
              
              }



            




}
