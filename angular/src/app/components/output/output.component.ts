import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterComponent } from './counter/counter.component'

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './output.component.html'
})
export class OutputComponent {
  count: number
}
