import { AuthGuard } from './../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/blog',
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
      canActivate: [AuthGuard]
  },
  {
      path: 'psychologue',
      loadChildren: () =>
          import('../modules/psychologue/psychologue-routing.module').then(m => m.PsychologueRoutingModule),
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
