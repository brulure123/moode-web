import { AdminModule } from './../modules/admin/admin.module';
import { AuthModule } from './../modules/auth/auth.module';
import { PsychologueModule } from './../modules/psychologue/psychologue.module';
import { BlogModule } from './../modules/blog/blog.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    PsychologueModule,
    AuthModule,
    AdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
