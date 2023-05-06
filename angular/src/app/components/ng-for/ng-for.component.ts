import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html'
})
export class NgForComponent {
  fruits = ['🍊', '🍏', '🥑']

  trackByFn(index: number, fruit: string): string {
    return fruit
  }
}
