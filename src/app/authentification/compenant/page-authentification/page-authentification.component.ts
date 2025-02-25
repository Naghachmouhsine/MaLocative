import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-page-principale',
  imports: [
    LoginComponent,
    RegisterComponent,
    NgClass
  ],
  templateUrl: './page-authentification.component.html',
  styleUrl: './page-authentification.component.css'
})
export class PageAuthentificationComponent {
  isLoginVisible = true; // Par défaut, le formulaire de connexion est visible
  isDarkMod:boolean=true;

}
