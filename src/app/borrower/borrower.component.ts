import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent {

  constructor(private userObj : UserService){}

}
