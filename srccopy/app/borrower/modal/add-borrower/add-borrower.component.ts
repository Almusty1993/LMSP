import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.scss']
})
export class AddBorrowerComponent {

addForm!:FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.addForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      position: ['0', [Validators.required]],
      booktitle: ['', [Validators.required]],
      dateregistered: ['', [Validators.required]],
      duedate: ['', [Validators.required]],

    });

    this.addForm.valueChanges.subscribe((change: any)=>{
      console.log(change)
    })
  }

  submitaddBorrower(){
    console.log(this.addForm.value);

    // Just put the connection to the API here....


  }




}
