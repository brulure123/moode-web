import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

const AngularMaterial = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  FlexLayoutModule,
  MatDividerModule,
  MatSidenavModule,
  MatCardModule
];

@NgModule({
  imports: [AngularMaterial],
  exports: [AngularMaterial]
})
export class AngularMaterialModule { }
