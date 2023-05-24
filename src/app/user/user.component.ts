import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  newUser : any;
  submitted : boolean = false;
  userForm = this.fb.group({
    username: [''],
    credentials: this.fb.group({ 
      email: [''],
      password: ['']
    }),
    address: this.fb.group({
      street : [''],
      city : [''],
      zipCode : ['']
    })
  });

 constructor(private fb : FormBuilder) {}

 onSubmit(){
    console.log(this.userForm.value);
    
    this.newUser = {
      username: this.userForm.value.username,
      email: this.userForm.value.credentials?.email,
      password: this.userForm.value.credentials?.password,
      address: {
        street: this.userForm.value.address?.street,
        city: this.userForm.value.address?.city,
        zipCode: this.userForm.value.address?.zipCode
      }
    };
    this.submitted = true;
    this.userForm.reset();
  }
}