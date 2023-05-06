import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  isYellowGreen = true
}
