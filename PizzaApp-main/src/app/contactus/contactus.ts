import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
frm:any;
constructor() {
  this.frm=new FormGroup({
    uname:new FormControl("admin",[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    email:new FormControl("",[Validators.required,Validators.email]),
    message:new FormControl("",[Validators.required,Validators.minLength(10),Validators.pattern('[a-zA-Z ]*')]),
  })
}  
}
 