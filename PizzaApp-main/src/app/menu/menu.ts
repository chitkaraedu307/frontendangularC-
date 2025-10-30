import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pizzadata } from '../pizzadata';
import { DiscountPipe } from '../discount-pipe';
import { Pizzaonline } from '../pizaaonline';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  imports: [CommonModule,RouterLink,DiscountPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
   res : any;
   pizza:any;
  constructor (private ob:Pizzadata,obj:Pizzaonline,h:HttpClient)
  {
     this.res=ob.add(5,7); 
    // this.pizza=ob.pizzadetails;
    obj.ShowAllpizza().subscribe(res=>this.pizza=res);
  }
  


 
  
}
