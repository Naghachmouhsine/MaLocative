import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-rechercher',
  imports: [MatDialogModule,NgStyle,NgClass],
  templateUrl: './rechercher.component.html',
  styleUrl: './rechercher.component.css'
})
export class RechercherComponent {

  isDarkMode:boolean=true;
  constructor(public dialogRef: MatDialogRef<RechercherComponent>){}

  closeFilterModal(): void {
    this.dialogRef.close();
  }

}
