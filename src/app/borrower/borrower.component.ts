import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddBorrowerComponent } from './modal/add-borrower/add-borrower.component';
import { EditBorrowerComponent } from './modal/edit-borrower/edit-borrower.component';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent {

  constructor(private userObj : UserService, public dialog: MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(AddBorrowerComponent, {
      height: '50rem',
      width: '40rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  editBorrowerModal(data:any){

    const dialogRef = this.dialog.open(EditBorrowerComponent, {
      height: '50rem',
      width: '40rem',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });



  }


}

