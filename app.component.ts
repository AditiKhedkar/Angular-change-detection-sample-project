
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Change Detection Demo';
  parentCounter = 0;
  data = { message: 'Hello' };

  increment() {
    this.parentCounter++;
  }

  mutateObject() {
    this.data.message = 'Updated (mutated)';
  }

  replaceObject() {
    this.data = { message: 'Updated (replaced)' };
  }
}
