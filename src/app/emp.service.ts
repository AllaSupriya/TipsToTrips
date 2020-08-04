import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {retry} from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
  flag : boolean;
  itemToPublish: Subject<any>;
  products:any;
  states: any;
  placecity:any;
  constructor(private httpClient : HttpClient,private router:Router) { 
    this.itemToPublish = new Subject();
  }
  getToCart(){
    return this.itemToPublish.asObservable();
  }
  addToCart(products : any){
    this.itemToPublish.next(products);
  }
  getProducts():any{
    return this.products;
  }
  setProducts(products:any){
    return this.products = products;
  }
  setUserLoggedIn() {
    this.flag = true;
  }
  getUserLogged() : boolean {
    return this.flag;
  }
  getUserPass(userName: string, password: string): any {
    console.log('Inside service:' , userName, password);
    return this.httpClient.get('RestAPI/webapi/myresource/getUserPassJ/' + userName + '/' + password).toPromise();
    }
  setUserLoggedOut() {
    this.flag = false;
  }
  registerEmp(user: any){
    console.log('Inside service...','',user);
    return this.httpClient.post('RestAPI/webapi/myresource/registerJ', user);
  }
  StatesCity(monthName: String){
    console.log('Inside ...','',monthName);
    this.httpClient.get('RestAPI/webapi/myresource/StateCityJ/'+ monthName).subscribe(data=> {console.log(data), this.states = data,this.router.navigate(['states']);});
  }
  Places(cityId: number){
    console.log('Inside Places...','',cityId);
    this.httpClient.get('RestAPI/webapi/myresource/PlacesJ/'+ cityId).subscribe(data=> {console.log(data), this.placecity = data,this.router.navigate(['places']);});
  }
}
