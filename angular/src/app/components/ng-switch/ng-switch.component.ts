import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent {
  id = 2
}
