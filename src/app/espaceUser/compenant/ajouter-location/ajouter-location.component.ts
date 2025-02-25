import { Component } from '@angular/core';
import { GestionLocationService } from '../../service/gestion-location.service';

@Component({
  selector: 'app-ajouter-location',
  imports: [],
  templateUrl: './ajouter-location.component.html',
  styleUrl: './ajouter-location.component.css'
})
export class AjouterLocationComponent {

  msgTest :any;

  constructor(private locationService:GestionLocationService){
    this.test()
  }

  async test(){
      this.msgTest= await this.locationService.ajouterLocation();
  }

}
