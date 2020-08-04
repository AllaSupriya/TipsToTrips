import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products = [];
  constructor(private router: Router, private service: EmpService) { }

  ngOnInit() {
    this.service.getToCart().subscribe(product => this.products.push(product));
    this.service.setProducts(this.products);
  }
  LogOut(){
    this.service.setUserLoggedOut();
    this.router.navigate(['']);
  }

}
