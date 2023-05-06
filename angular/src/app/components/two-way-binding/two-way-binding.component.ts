import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterComponent } from './counter/counter.component'

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './two-way-binding.component.html'
})
export class TwoWayBindingComponent {
  firstCount = 0
  secondCount = 0
}
