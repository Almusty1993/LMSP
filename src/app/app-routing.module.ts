import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { ReturnsComponent } from './returns/returns.component';

const routes: Routes = [
  {path: '', component : DashboardComponent},
  {path: 'login', component:LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'borrower', component:BorrowerComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'books', component: BooksComponent},
  {path: 'returns', component: ReturnsComponent},


    {path: '**', redirectTo:''} // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }




