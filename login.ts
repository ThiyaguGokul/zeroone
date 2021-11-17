import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // form: FormGroup;
  // public loginInvalid: boolean;
  // private formSubmitAttempt: boolean;
  // private returnUrl: string;
  loginUserData ={
    psid:"",
    password:""
  }
  invalidLogin = false
  constructor(private router: Router,private loginService: LoginService) {}
  ngOnInit() {
  }

  login(): void {
    // if (this.loginUserData.username == 'admin' && this.loginUserData.password == 'admin') {
    //   // this.router.navigateByUrl('/home');
    //   this.router.navigate(['/home']);
    //   console.log('Login Success');
    // } else {
    //   alert("Invalid credentials");
    //   console.log('Invaild credentials')
    // }

    this.loginService.loginAuth(this.loginUserData).subscribe(
      (response) => {
        this.router.navigate(['/home']);
        console.log(response.msg);
        this.loginService.isUserLoggedIn();
      },
      (err) => {
        console.log(err);
        // this.invalidLogin=true;
        this.loginService.isUserLoggedIn();
      }
    )
    }
  //   if(this.loginService.loginAuth(this.loginUserData)){
  //     console.log('response : '+this.loginUserData)
  //     this.router.navigate(['home']);
  //     this.invalidLogin=false;
  //   }else{
  //     this.invalidLogin=true;
  //   }
  // }

//   btnClick= function () {
//     this.router.navigateByUrl('/home');
// };


}
