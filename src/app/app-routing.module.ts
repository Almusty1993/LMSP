import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BorrowerComponent } from './borrower/borrower.component';
import { SelectionPageComponent } from './selection-page/selection-page.component';

const routes: Routes = [

{path: 'login', component : LogInComponent},
{path: 'signUp', component : SignUpComponent},
{path: 'dashboard', component : DashboardComponent},
{path: 'borrower', component : BorrowerComponent},
{path: 'selectionPage', component : SelectionPageComponent},


{path: '**', redirectTo : 'selectionPage', component : SelectionPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
