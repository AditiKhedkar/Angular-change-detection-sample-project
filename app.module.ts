
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DefaultChildComponent } from './default-child/default-child.component';
import { OnPushChildComponent } from './on-push-child/on-push-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultChildComponent,
    OnPushChildComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
