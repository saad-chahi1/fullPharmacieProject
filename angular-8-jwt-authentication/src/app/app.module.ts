import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './Auth_Components/login/login.component';
import { RegisterComponent } from './Auth_Components/register/register.component';
import { HomeComponent } from './Auth_Components/home/home.component';
import { BoardAdminComponent } from './Auth_Components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './Auth_Components/board-moderator/board-moderator.component';
import { ProfileComponent } from './Auth_Components/profile/profile.component';

import { authInterceptorProviders } from './Auth_Components/_helpers/auth.interceptor';
import { NavComponent } from './ProductComponent/nav/nav.component';
import { CardComponent } from './ProductComponent/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
