import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { AuthService } from '../../authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GestionLocationService {
  private apiUrl:string="http://localhost:8080/location/";
  private token:string="";
  constructor(private http: HttpClient,private router:Router,private authService:AuthService) {
    this.authService.currentUser.subscribe(user => {
      this.token = user.token;
    });
  }

  // async ajouterLocation() : Promise<any>{
  //   try {
  //     // Ajouter le token dans les headers de la requête
  //     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  //     console.log("token")
  //     console.log(this.token)
  //     console.log(headers)
  //     console.log(headers.get('Authorization'))
  //     // const response = await lastValueFrom(
  //     //   this.http.get<any>('http://localhost:8080/location/ajouter', { headers }) 
  //     // );
  //     const response = await this.http.get<any>('http://localhost:8080/location/ajouter', { headers : headers  }).toPromise();
  //     console.log("reponse : ")
  //     console.log(response)
      
  //     return response; 

  //   } catch (error) {
  //     console.log('Erreur lors de l\'ajout :', error);
  //     return { statusCode: 0, message: "Erreur lors de l'ajout" };
  //   }
  // }
  add(data:any):Observable<any>{
    return this.http.post(this.apiUrl, data);

  }
  update(data: any): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }
  get(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.apiUrl+"/"+id);
}

  }


//}
