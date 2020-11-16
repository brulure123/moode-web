import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'blog',
  },
  {
    path: 'blog',
    loadChildren: () =>
        import('../modules/blog/blog-routing.module').then(m => m.BlogRoutingModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
        import('../modules/auth/auth-routing.module').then(m => m.AuthRoutingModule),
  },
  {
      path: 'admin',
      loadChildren: () =>
          import('../modules/admin/admin-routing.module').then(m => m.AdminRoutingModule),
  },
  {
      path: 'psy',
      loadChildren: () =>
          import('../modules/psychologue/psychologue-routing.module').then(m => m.PsychologueRoutingModule),
  },
  {
      path: '**',
      pathMatch: 'full',
      loadChildren: () =>
          import('../modules/erreur/erreur-routing.module').then(m => m.ErreurRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
