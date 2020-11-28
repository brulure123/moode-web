import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
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
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    AccueilComponent,
    ContactComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AfficherArticleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
