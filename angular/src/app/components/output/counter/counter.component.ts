import { Component, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  count = 0
  @Output() countChange = new EventEmitter<number>()

  handleIncrement(): void {
    this.countChange.emit(++this.count)
  }
}
