import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  keralaimage : any;
  city : any;
  cityId:any;
  an : any;
  goa : any;
  month  :any;
  constructor(private router : Router,private service : EmpService) { 
    this.city = this.service.states;
    this.month  = this.service.states.monthName;
    this.keralaimage = [{id:101,imagepath:'assets/Thrissur.jpg'},{id:102,imagepath:'assets/jan/Kochi.jpg'},{id:103,imagepath:'assets/jan/Thiruvananthapuram.jpg'}];
    this.an = [{id:104,imagepath:'assets/jan/port-blair.jpg'},{id:105,imagepath:'assets/jan/Havelock-island.jpg'},{id:106,imagepath:'assets/jan/Mayabunder.jpg'}];
    this.goa = [{id:107,imagepath:'assets/jan/Mormugao.jpg'},{id:108,imagepath:'assets/jan/Panaji.jpeg'},{id:109,imagepath:'assets/jan/Ponda.jpg'}];
  }

  ngOnInit() { 
  }
  showPlaces(){
    this.router.navigate(['places']);
   //this.cityId = 1;
    //this.service.Places(this.cityId);

  }
}
