import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { CommonModule, isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-is-platform-browser',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './is-platform-browser.component.html'
})
export class IsPlatformBrowserComponent implements OnInit {
  userAgent: string

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId))
      this.userAgent = window.navigator.userAgent
  }
}
