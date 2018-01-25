import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
