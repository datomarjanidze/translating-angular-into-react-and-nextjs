import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./examples.component').then((c) => c.ExamplesComponent)
  },
  {
    path: 'router',
    loadChildren: () =>
      import('../components/router/router.routes').then((r) => r.routes)
  }
]
