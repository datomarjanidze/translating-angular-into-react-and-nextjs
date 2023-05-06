import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessageComponent } from './message/message.component'

@Component({
  selector: 'app-on-changes',
  standalone: true,
  imports: [CommonModule, MessageComponent],
  templateUrl: './on-changes.component.html'
})
export class OnChangesComponent {
  message = 'Hey'

  changeMessage(): void {
    this.message = "What's up?"
  }
}
