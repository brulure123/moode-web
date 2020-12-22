import { PsychologueResolver } from './../../resolvers/psychologue.resolver';
import { ProfileComponent } from './pages/profile/profile.component';
import { PublierArticleComponent } from './pages/publier-article/publier-article.component';
import { MesPatientsComponent } from './pages/mes-patients/mes-patients.component';
import { MesArticlesComponent } from './pages/mes-articles/mes-articles.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PsychologueComponent } from './psychologue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PsychologueComponent,
    children: [
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        component: DashboardComponent,
        resolve: {
          psychologue: PsychologueResolver
        }
      },
      {
        path: 'abonnements',
        component: AbonnementsComponent,
      },
      {
        path: 'articles',
        component: MesArticlesComponent,
      },
      {
        path: 'patients',
        component: MesPatientsComponent,
      },
      {
        path: 'pubarticle',
        component: PublierArticleComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PsychologueResolver],
})
export class PsychologueRoutingModule { }
