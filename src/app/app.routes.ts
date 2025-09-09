import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full',
  },
  {
    path: 'exemplo',
    loadComponent: () => import('./exemplo/exemplo.page').then( m => m.ExemploPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro-empresa/cadastro-empresa.page').then( m => m.CadastroEmpresaPage)
  },
];
