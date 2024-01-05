import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './config/routes.constants';

const routes: Routes = [
  {
    path: ROUTES.LOGIN,
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ROUTES.EDIT,
    loadChildren: () =>
      import('./pages/edit/edit.module').then((m) => m.EditModule),
  },
  {
    path: '**',
    redirectTo: ROUTES.LOGIN,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
