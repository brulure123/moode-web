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
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [PsychologueComponent, HeaderComponent, SidebarComponent, FooterComponent],
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
    HighchartsChartModule,
    PsychologueRoutingModule
  ]
})
export class PsychologueModule { }
