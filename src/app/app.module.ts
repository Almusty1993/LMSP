import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ReturnsComponent } from './returns/returns.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookHistoryComponent } from './book-history/book-history.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BorrowedBookOverlayComponent } from './borrowed-book-overlay/borrowed-book-overlay.component';



@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    SignUpComponent,
    LogInComponent,
    DashboardComponent,
    BooksComponent,
    ReturnsComponent,
    UserDashboardComponent,
    BookHistoryComponent,
    WishListComponent,
    BorrowedBookOverlayComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
