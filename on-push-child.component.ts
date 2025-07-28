
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-on-push-child',
  templateUrl: './on-push-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushChildComponent {
  @Input() counter: number = 0;
  @Input() data: any;

  get runChangeDetection() {
    console.log('OnPushChildComponent - Change Detection Triggered');
    return true;
  }
}
