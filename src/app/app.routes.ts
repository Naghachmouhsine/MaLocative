import { Routes } from '@angular/router';
import {PageAuthentificationComponent} from './authentification/compenant/page-authentification/page-authentification.component';
import { AuthGuard } from './authentification/AuthGuard';
import { ProfilUserComponent } from './espaceUser/compenant/profil/profil.component';
import { HomeComponent } from './espaceUser/compenant/home/home.component';
import { SettingsComponent } from './setting/setting.component';
import { PageUserComponent } from './espaceUser/compenant/page-user/page-user.component';
import { AuthSuccessComponent } from './auth-success/auth-success.component';

export const routes: Routes = [
  {path : "",component : PageAuthentificationComponent},
  {path : "auth",component : PageAuthentificationComponent},
  // {path : "user",component:PageUserComponent,canActivate:[AuthGuard] }
  {path : "user",component:PageUserComponent},
  { path: 'auth-success', component: AuthSuccessComponent
    
  },
];