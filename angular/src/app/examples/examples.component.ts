import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

import {
  NgIfComponent,
  NgIfElseComponent,
  NgForComponent,
  NgSwitchComponent,
  TemplateInterpolationComponent,
  DataBindingComponent,
  InputComponent,
  OutputComponent,
  TwoWayBindingComponent,
  OnChangesComponent,
  EventBindingComponent,
  ViewChildComponent,
  NgClassComponent,
  NgStyleComponent,
  StylesComponent,
  PipeComponent,
  AttributeDirectiveComponent,
  RouterComponent,
  IsPlatformBrowserComponent
} from '../components'

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [
    CommonModule,
    NgIfComponent,
    NgIfElseComponent,
    NgForComponent,
    NgSwitchComponent,
    TemplateInterpolationComponent,
    DataBindingComponent,
    InputComponent,
    OutputComponent,
    TwoWayBindingComponent,
    OnChangesComponent,
    EventBindingComponent,
    ViewChildComponent,
    NgClassComponent,
    NgStyleComponent,
    StylesComponent,
    PipeComponent,
    AttributeDirectiveComponent,
    RouterComponent,
    IsPlatformBrowserComponent
  ],
  templateUrl: './examples.component.html'
})
export class ExamplesComponent {}
