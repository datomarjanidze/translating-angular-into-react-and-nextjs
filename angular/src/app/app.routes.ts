import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'examples'
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./examples/examples.routes').then((r) => r.routes)
  }
]
