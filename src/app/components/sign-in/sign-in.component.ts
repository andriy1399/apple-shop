import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  credential = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public modal: ModalService) { }
 
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.credential);  // { credentialirst: '', last: '' }
  }
}
