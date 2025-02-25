import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-login',
  imports: [AuthModule,NgStyle,GoogleSigninButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isDarkMode:boolean=true;
  constructor(private fb: FormBuilder,
              private serviceAuth:AuthService,
              private router:Router,
              private authService:SocialAuthService
            ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',Validators.required],
    });
    this.authService.authState.subscribe((user) => {
      console.log("good")
      console.log(user)     
      this.loginWithGoogle(user)
    });
  }
  
  async onSubmit() {
    if (this.loginForm.valid) {
      const reponse =await this.serviceAuth.login(this.loginForm.value,"login");
      console.log(reponse)
      if(reponse.statusCode==200)
        this.redirectTo(reponse.user.role)
    }
  }

  async loginWithGoogle(data:any){
    const dataObj={
      "firstName" : data.firstName,
      "lastName" : data.lastName,
      "email" : data.email
    }
    const reponse=await this.serviceAuth.login(dataObj,"google");
    console.log(reponse)
    if(reponse.statusCode==200)
      this.redirectTo(reponse.user.role)
  }

  redirectTo(role:string){
    if(role==="USER")
      this.router.navigate(["user"])
    else
      this.router.navigate(["admin"])
  }

}
