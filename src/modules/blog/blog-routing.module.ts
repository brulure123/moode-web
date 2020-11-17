import { AfficherArticleComponent } from './pages/afficher-article/afficher-article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { BlogComponent } from './blog.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: AccueilComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'article',
        component: AfficherArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
