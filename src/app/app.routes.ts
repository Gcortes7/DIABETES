import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'exploracionfisica',
    loadComponent: () => import('./componentes/exploracion-fisica/exploracion-fisica.component').then((m) => m.ExploracionFisicaComponent),
  },
  {
    path: '',
    redirectTo: 'exploracionfisica',
    pathMatch: 'full',
  },
];
