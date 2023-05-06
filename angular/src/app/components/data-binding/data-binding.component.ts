import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-binding.component.html'
})
export class DataBindingComponent {
  buttonName = 'take-care-now'
  disabled = true
}
