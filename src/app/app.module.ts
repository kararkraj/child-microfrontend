import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { SampleModule } from './sample/sample.module';

const local = false;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModule
  ],
  providers: [],
  bootstrap: [ local ? AppComponent : []],
  entryComponents: [SampleComponent]
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) {
    const micro = createCustomElement(SampleComponent, { injector: this.injector });
    customElements.define('micro-app', micro);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {

  }
}

