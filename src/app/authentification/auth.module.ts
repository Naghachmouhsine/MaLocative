import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthentificationComponent } from './compenant/page-authentification/page-authentification.component';
import { MatIconModule } from '@angular/material/icon';
import {HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';


@NgModule({
  exports: [ReactiveFormsModule,MatIconModule],
  providers: [provideHttpClient()],
  bootstrap : [AuthModule]
})
export class AuthModule { }