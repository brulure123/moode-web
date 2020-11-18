import { RegisterComponent } from './pages/register/register.component';
import { AuthentificationComponent } from './pages/authentification/authentification.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: '/authentification',
        pathMatch: 'full'
      },
      {
        path: 'authentification',
        component: AuthentificationComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
