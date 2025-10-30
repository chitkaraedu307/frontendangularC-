import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Login } from "./login/login";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PizzaApp');
  b:boolean=false;
  sid:number =10;
  sname:string="Bully Meguire";
  url:string="http://www.google.com";
  url_1:string="http://www.Youtube.com";
  mycls:string="hi";
abc:string='font-Weight:bold';

  myfunc(){
    let mycss={
      hi:true,
      welcome:true
    };
    return mycss
  }

  stylefunc(){
    let mystyle={
     'font-size':'20px',
      'color':'lime',
      'font-weight':'bold'

      
    };
    return mystyle;
  }
  

}



