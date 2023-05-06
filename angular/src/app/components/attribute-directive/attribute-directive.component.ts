import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChangeColorDirective } from './change-color.directive'

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, ChangeColorDirective],
  templateUrl: './attribute-directive.component.html'
})
export class AttributeDirectiveComponent {}
