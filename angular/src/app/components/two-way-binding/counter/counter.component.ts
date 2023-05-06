import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input({ required: true }) firstCount: number
  @Output() firstCountChange = new EventEmitter<number>()
  @Input({ required: true }) secondCount: number
  @Output() secondCountChange = new EventEmitter<number>()

  incrementCounter(): void {
    this.firstCountChange.emit(++this.firstCount)
  }

  incrementSecondCount(): void {
    this.secondCountChange.emit(++this.secondCount)
  }
}
