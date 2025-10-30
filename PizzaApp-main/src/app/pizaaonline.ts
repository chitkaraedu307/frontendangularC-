import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pizzaonline {
  constructor(private ob:HttpClient){
    
  }
  ShowAllpizza():Observable<any>{
    return this.ob.get("https://localhost:7123/api/MyPizaa/showAll")
  }

  AddNewUser(data:any):Observable<any>
  {
    return this.ob.post("https://localhost:7123/api/MyPizaa/Adduser",data)
  }
  LoginUser(data:any):Observable<any>
  {
    return this.ob.post("https://localhost:7123/api/MyPizaa/LoginUser",data)
  }
  Buy(data:any):Observable<any>
  {
    return this.ob.post("https://localhost:7123/api/MyPizaa/Buy ",data)
  }
 
  
}
 