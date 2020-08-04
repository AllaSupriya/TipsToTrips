import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  constructor(private router: Router, private service: EmpService) {
    this.user = {userName:'',password:''};
   }

  ngOnInit() {
  }

  async validateUser(loginForm: any) {
    console.log('Inside validateUser', loginForm.userName, loginForm.password);
    if (loginForm.userName === 'admin'  && loginForm.password === 'admin') {
      this.service.setUserLoggedIn();
      this.router.navigate(['main']);
    } else {
    await this.service.getUserPass(loginForm.userName, loginForm.password).then((data: any) => {
      if (data != null) {
      this.service.setUserLoggedIn();
      this.router.navigate(['main']);
      //toastr.success('Login', 'Login Success');
      } else {
      //toastr.success('Login', 'Login Failure');
      }
    },
    (error) => {
      //toastr.success('Login', 'Login Failure');
        // this.router.navigate(['products']);
    });
  }
  }

}
