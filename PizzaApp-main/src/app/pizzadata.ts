import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Pizzadata {
  res:any;
  add(x:number,y:number)
  {
    var c=x+y;
    return 'The sum is '+c;
  }

  pizzadetails:any[]=
  [
      {pizzaid:'100', pizzaname:'AussiePizza', description:'australian veg pizza',price:220, pimage:'/assets/images/AussiePizza.jpg'},
      {pizzaid:'200', pizzaname:'capricciosa', description:'veg capricciosa ',price:520, pimage:'/assets/images/capricciosa.jpg'},
      {pizzaid:'300', pizzaname:'CheeseNCornPizza', description:'popular cheese pizza',price:320, pimage:'/assets/images/CheeseNCornPizza.jpg'},
      {pizzaid:'400', pizzaname:'ChickenPizza', description:'chicken indian type',price:250, pimage:'/assets/images/ChickenPizza.jpg'},
      {pizzaid:'500', pizzaname:'farmhouse', description:'veg farm pizza',price:290, pimage:'/assets/images/farmhouse.jpg'},
      {pizzaid:'600', pizzaname:'hawaiian', description:'non veg pizza',price:350, pimage:'/assets/images/hawaiian.jpg'},
      {pizzaid:'700', pizzaname:'KaleAndSausagePizza', description:'veg souce pizza',price:270, pimage:'/assets/images/KaleAndSausagePizza.jpg'},
      {pizzaid:'900', pizzaname:'MexicanGreenWavePizza', description:'maxican style pizza',price:260, pimage:'/assets/images/MexicanGreenWavePizza.jpg'},
  
  ];


}
