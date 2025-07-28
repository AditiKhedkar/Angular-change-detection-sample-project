
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-child',
  templateUrl: './default-child.component.html'
})
export class DefaultChildComponent {
  @Input() counter: number = 0;
  @Input() data: any;

  get runChangeDetection() {
    console.log('DefaultChildComponent - Change Detection Triggered');
    return true;
  }
}
