import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string;
  user:any;
  constructor(private router: Router,private service : EmpService) {
    this.user={eMail:'',password:'',userName:''};
   } 

  ngOnInit() {
  }
  regEmp(){
    this.service.registerEmp(this.user).subscribe(
      (res) => {
        this.router.navigate(['login']);
      },
      (err) => {
        this.message = err.error.text;
      }
    );
  }
}
