import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './router.component.html'
})
export class RouterComponent {
  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl('/examples/router/foo')
  }
}
