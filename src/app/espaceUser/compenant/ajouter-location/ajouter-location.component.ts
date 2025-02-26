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
  data:any[]=[];
  constructor(private locationService:GestionLocationService){
   
  }

  get(){
      this.locationService.get().subscribe(
        {
          next : (res) =>{
            console.log(res);
            this.data=res;
          },
          error : (err) =>{
            console.log("erreur : ",err);
          }
        }
      )
  }

  delete(id:number){
    this.locationService.delete(id).subscribe(
      {
        next : (res) =>{
          this.get();
        },
        error : (err)=>{
          console.log("erreur : ",err);
        }
      }
    )
  }

  add(location:any){
    this.locationService.add(location).subscribe(
      {
        next : (res) =>{
          this.get();
        },
        error : (err)=>{
          console.log("erreur : ",err);
        }
      }
    )
  }

  update(location:any){
    this.locationService.update(location).subscribe(
      {
        next : (res) =>{
          this.get();
        },
        error : (err)=>{
          console.log("erreur : ",err);
        }
      }
    )
  }


}
