
declare var bootstrap: any;//variable globale pour bootstrap

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../authentification/auth.service';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { SettingsComponent } from "../../../setting/setting.component";
import { HomeComponent } from "../home/home.component";
import { ProfilUserComponent } from "../profil/profil.component";
import { MatDialog } from '@angular/material/dialog';
import { RechercherComponent } from '../rechercher/rechercher.component';
import { AjouterLocationComponent } from "../ajouter-location/ajouter-location.component";

@Component({
  selector: 'app-user',
  imports: [NgClass, NgIf, NgSwitch, NgSwitchCase, SettingsComponent, HomeComponent, ProfilUserComponent, AjouterLocationComponent],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.css'
})
export class PageUserComponent implements OnInit {
  currentUser: any;
  isDarkMode: boolean = true;
  activeElement: string = 'home';
  isAuth:boolean=true;
  navButtons = [
    { id: 'home', label: 'الرئيسية', icon: 'fas fa-home' },
    { id: 'add', label: 'إضافة', icon: 'fas fa-plus-circle' },
    { id: 'messages', label: 'الرسائل', icon: 'fas fa-envelope', badge: 2, badgeClass: 'bg-warning' },
    { id: 'notifications', label: 'الإشعارات', icon: 'fas fa-bell', badge: 3, badgeClass: 'bg-danger' },
    { id: 'recherche', label: 'بحث', icon: 'fas fa-search', action: () => this.openFilterModal() }
  ];
  constructor(private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  setActive(activeElement: string) {
    this.activeElement = activeElement;
  }
  getButtonClass(element: string): string {
    return this.activeElement === element ? 'btn-light' : 'btn-outline-light';
  }
  openLogoutModal() {
    const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal')!);
    logoutModal.show();
  } 

  openFilterModal(): void {
    this.dialog.open(RechercherComponent, {
      width: '400px'
    });
  }

  closeLogoutModal() {
    const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal')!);
    logoutModal.hide();
  }

  logOut(): void {
    this.authService.logout();
    this.closeLogoutModal();
  }
}
