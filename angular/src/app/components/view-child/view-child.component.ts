import { Component, ViewChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-child.component.html'
})
export class ViewChildComponent {
  @ViewChild('message') message: ElementRef<HTMLDivElement>

  changeMessage(): void {
    this.message.nativeElement.innerText = 'New message'
  }
}
