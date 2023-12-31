import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component : LogInComponent},
  {path: 'login', component:LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'borrower', component:BorrowerComponent},
  {path: 'dashboard', component:DashboardComponent},
    {path: '**', redirectTo:''} // default route 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }




