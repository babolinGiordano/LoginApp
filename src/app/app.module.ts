import { AppMaterialModule } from './app-material/app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AppMaterialModule,
      ReactiveFormsModule
   ],
   providers: [AuthService, AuthGuard],
   bootstrap: [AppComponent]
})
export class AppModule { }
