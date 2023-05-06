import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./router.component').then((c) => c.RouterComponent)
  },
  {
    path: 'foo',
    loadComponent: () =>
      import('./foo/foo.component').then((c) => c.FooComponent)
  }
]
