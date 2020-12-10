import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsychologueRoutingModule } from './psychologue-routing.module';
import { PsychologueComponent } from './psychologue.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { MesPatientsComponent } from './pages/mes-patients/mes-patients.component';
import { MesArticlesComponent } from './pages/mes-articles/mes-articles.component';
import { PublierArticleComponent } from './pages/publier-article/publier-article.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WidgetCardComponent } from './widgets/widget-card/widget-card.component';
import { WidgetAreaComponent } from './widgets/widget-area/widget-area.component';


@NgModule({
  declarations: [
    PsychologueComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AbonnementsComponent,
    MesPatientsComponent,
    MesArticlesComponent,
    PublierArticleComponent,
    ProfileComponent,
    WidgetCardComponent,
    WidgetAreaComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    HighchartsChartModule,
    PsychologueRoutingModule
  ]
})
export class PsychologueModule { }
