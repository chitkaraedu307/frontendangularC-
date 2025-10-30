import { Component } from '@angular/core';
import { Pizzaonline } from '../pizaaonline';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private obj:Pizzaonline){
 
  }
  Adduser(frm:any){
  this.obj.AddNewUser(frm).subscribe(d =>alert("New user created"))
  }
 
}
