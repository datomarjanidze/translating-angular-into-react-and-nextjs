import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CounterComponent } from './counter/counter.component'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './input.component.html'
})
export class InputComponent {
  count = 0

  handleIncrement(): void {
    this.count++
  }
}
