import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-else.component.html'
})
export class NgIfElseComponent {
  someExpression = false
}
