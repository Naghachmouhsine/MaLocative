import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentification/auth.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-profil',
  imports: [FormsModule, ReactiveFormsModule,NgClass],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilUserComponent implements OnInit {

  currentUser: any;
  
  profileForm: FormGroup;
  isDarkMode: boolean = true;
  constructor(private fb: FormBuilder,private authService:AuthService) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [{ value: 'user@example.com', disabled: true }],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
    console.log(localStorage.getItem("currentUser"));
  
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
    
    }
  }

}
