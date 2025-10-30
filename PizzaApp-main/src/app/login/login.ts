import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-login',
  imports:[FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  error:string='';
 
  constructor(private r: Router) {}
  validate(f:any)
  {
    

    if(f.uid=="admin" && f.pwd=="admin")
    { 
      sessionStorage.setItem("uid",f.uid);
     
      this.r.navigate(['menu']);
      this.error="Login Successful";
    }
    else
    {
      this.error="Login Failed";
      
    }
  }
}
 