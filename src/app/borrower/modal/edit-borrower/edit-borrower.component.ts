import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-borrower',
  templateUrl: './edit-borrower.component.html',
  styleUrls: ['./edit-borrower.component.scss']
})
export class EditBorrowerComponent {

  editForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
 

    this.editForm = this.formBuilder.group({
      name: [this.data.name, [Validators.required]],
      position: [this.data.position, [Validators.required]],
      booktitle: [this.data.booktitle, [Validators.required]],
      dateregistered: [this.data.dateregistered, [Validators.required]],
      duedate: [this.data.duedate, [Validators.required]],

    });
  }


  submitBorrower() {

  }



}
