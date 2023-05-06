import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.component.html'
})
export class PipeComponent {
  data: object = {
    foo: [{ bar: 'baz' }]
  }
}
