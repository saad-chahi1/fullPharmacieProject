import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './Auth_Components/register/register.component';
import { LoginComponent } from './Auth_Components/login/login.component';
import { HomeComponent } from './Auth_Components/home/home.component';
import { ProfileComponent } from './Auth_Components/profile/profile.component';
import { BoardModeratorComponent } from './Auth_Components/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './Auth_Components/board-admin/board-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
