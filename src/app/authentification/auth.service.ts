import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, switchMap } from 'rxjs';
import { AuthResponse } from './models/AuthResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private apiUrl:string="http://localhost:8080/auth/";
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(private http: HttpClient,private router:Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || "{}" ));
    this.currentUser = this.currentUserSubject.asObservable();
  }


  async login(userReq: any,req:string):  Promise<AuthResponse> {
    try {
      console.log({ "user": userReq })
      const response = await this.http.post<any>(this.apiUrl + req,{ "user": userReq }).toPromise();
      if(response.statusCode==200){ //authentification avec succes, et stockage sesion user
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.currentUserSubject.next(response);
      }
      return response;
    } catch (error) {
      console.error('Erreur lors de l’authentification :', error);
      return <AuthResponse> {statusCode : 0,message : "Erreur lors de l'authentification"} ;
    }
  }

  
  isAuthenticated(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return currentUser && currentUser.token;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(["/auth"])
  }

}

