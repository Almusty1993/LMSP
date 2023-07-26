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
          
            this.deletecopy=true;
            this.userObj.fetchcopy(book.book_id).subscribe((result: any) => {
        
              console.log('copy fetched !! ');
              this.copies=result
                     
            })


          }




          onDeletecopy(copy: any){
            
             this.userObj.deleteBookcopy(copy.copy_id).subscribe((result) => {
      
            console.log(' copy deleted !! ');
                  })


           this.userObj.updatecopynumber(copy.book_id).subscribe((result) => {
      
            console.log(' copynumber updated !! ');
            this.onGetBooks(); 
             this.deletecopy=false
           })


            }
        
          onDeletewhole(book: any) {
            console.log('delete icon click');
            this.deletecopy=true;
            this.userObj.deleteBook(book.book_id).subscribe((result) => {
        
              console.log('deleted !! ');
            

            })

            this.userObj.deletewholecopyBook(book.book_id).subscribe((result) => {
        
              console.log('deleted !! ');
              this.onGetBooks(); 
              this.deletecopy=false

            })
          }
        
        

  onFileSeleceted(event :any){
    this.selectedFile=event.target.files[0];
    console.log(this.selectedFile)
  }
        
        
            


  onUpdateBooks(id:any){

            console.log(id)
            
             
            const formData = new FormData();
            
            id=this.bookid;
            
                   
            
              formData.append('book_id',this.bookid);
              formData.append('title',this.title);
              formData.append('price',this.category);
              formData.append('edition',this.edition);
              formData.append('author',this.author);
              formData.append('copynumber',this.copynumber);
              formData.append('availablecopies',this.availablecopies);
              formData.append('image',this.selectedFile);
              console.log(formData)
               this.userObj.updatebook(formData)
                   .subscribe((res:any)=>{
                    console.log('updated !!!');
                    this.onGetBooks();})
                    this.isEditing=false;
            
                   
            }
         

          onEdit(book:any){
            this.isEditing = true;
                 this.title=book.title;
                 this.author=book.author;
                 this.category=book.category;
                 this.edition=book.edition
                 this.copynumber=book.copynumber;
                 this.availablecopies=book.availablecopies;
               
              
              }



            




}
