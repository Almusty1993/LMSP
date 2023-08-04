import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ReturnsComponent } from './returns/returns.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { BookHistoryComponent } from './book-history/book-history.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { BorrowedBookOverlayComponent } from './borrowed-book-overlay/borrowed-book-overlay.component';
import { BorrowdBookOverlayComponent } from './borrowd-book-overlay/borrowd-book-overlay.component';

const routes: Routes = [
  {path: '', component : LogInComponent},
  {path: 'login', component:LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'borrower', component:BorrowerComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'books', component: BooksComponent},
  {path: 'returns', component: ReturnsComponent},
  {path: 'userDashboard', component: UserDashboardComponent},
  {path: 'bookHistory', component : BookHistoryComponent},
  {path: 'wishList', component : WishListComponent},
  {path: 'borrowedBookOverlay', component : BorrowdBookOverlayComponent},


    {path: '**', redirectTo:''} // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }




