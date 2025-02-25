import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-success',
  templateUrl: './auth-success.component.html',
  styleUrls: ['./auth-success.component.css']
})
export class AuthSuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Récupérer le token depuis les paramètres de l'URL
    this.route.queryParams.subscribe(params => {
      // const token = params['token'];  // Supposons que le backend envoie un token
      // if (token) {
      //   localStorage.setItem('authToken', token); // Stocker le token
      //   this.router.navigate(['/dashboard']); // Rediriger vers la page principale
      // }
      console.log(params)
    });
  }
}
