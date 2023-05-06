import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html'
})
export class NgIfComponent {
  someExpression = true
}
