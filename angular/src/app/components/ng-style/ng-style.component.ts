import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html'
})
export class NgStyleComponent {
  backgroundColor = 'yellowgreen'
}
