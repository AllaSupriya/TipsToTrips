import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  monthName : any;
  constructor(private router: Router, private service: EmpService) { 
  }

  ngOnInit() { 
  }
  showStates1(){
    this.monthName = "January";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates2(){
    this.monthName = "February";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates3(){
    this.monthName = "March";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates4(){
    this.monthName = "April";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates5(){
    this.monthName = "May";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates6(){
    this.monthName = "June";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates7(){
    this.monthName = "July";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates8(){
    this.monthName = "August";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates9(){
    this.monthName = "September";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates10(){
    this.monthName = "October";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates11(){
    this.monthName = "November";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
  showStates12(){
    this.monthName = "December";
    console.log('Inside service...','',this.monthName);
    this.service.StatesCity(this.monthName);
    //this.router.navigate(['states']);
  }
}
