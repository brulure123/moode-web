import {AngularMaterialModule } from './../angular-material/angular-material.module';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AfficherArticleComponent } from './pages/afficher-article/afficher-article.component';


@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    AccueilComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AfficherArticleComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
