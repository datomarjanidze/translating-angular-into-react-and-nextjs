import { Component, OnChanges, Input, SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnChanges {
  @Input({ required: true }) message: string

  ngOnChanges({ message }: SimpleChanges): void {
    if (message?.currentValue) console.log(`Message changed: ${this.message}`)
  }
}
