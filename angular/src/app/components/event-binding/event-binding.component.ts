import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html'
})
export class EventBindingComponent {
  handleClick(): void {
    console.log('Clicked on div')
  }
}
