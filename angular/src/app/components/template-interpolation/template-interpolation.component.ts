import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-template-interpolation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-interpolation.component.html'
})
export class TemplateInterpolationComponent {
  message = "If I'm not back in five minutes, just wait longer."
}
