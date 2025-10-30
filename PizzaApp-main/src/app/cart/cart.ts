import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizzaonline } from '../pizaaonline';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  q:number =0;
  pid:any; pname:any;price:any;desc:any;im:any;
  
  constructor(private obj:Pizzaonline,ob:ActivatedRoute) {
    ob.queryParams.subscribe(z => {this.pid=z["a"], this.pname=z["b"],this.im=z["c"],this.desc=z["d"],this.price=z["e"]});
   }

  Buy(frm: any) {
    const orderData = {
      username: sessionStorage.getItem("uid"),
      pizzaid: this.pid,
      qty: frm.qty,
      transdate: new Date().toISOString().split('T')[0]
    };
    this.obj.Buy(orderData).subscribe(d => alert("New Item Added to cart"));
  }
 
}