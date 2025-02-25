import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
 // imports: [NavBareComponent]
})
export class SettingsComponent {
  // Ici, vous pouvez déclarer des propriétés et méthodes pour gérer
  // les données des paramètres et leur sauvegarde.
  
  // Exemple : stocker le titre de l'application
  appTitle: string = '';

  // Méthode pour sauvegarder les paramètres
  saveSettings() {
    console.log('Les paramètres ont été sauvegardés');
    // Ajoutez ici la logique pour sauvegarder les paramètres, par exemple via un service HTTP.
  }
}
