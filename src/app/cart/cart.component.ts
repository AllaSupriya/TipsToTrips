import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts: any;
  constructor(private service : EmpService) { 
    this.cartproducts = this.service.getProducts();
  }

  ngOnInit() {
  }
  
}
