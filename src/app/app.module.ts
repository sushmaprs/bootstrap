import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import {CustomElementComponent} from './custom-element/custom-element.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarrComponent } from './navbarr/navbarr.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    CustomElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [CustomElementComponent],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(injector: Injector) {
  const el = createCustomElement(CustomElementComponent, { injector });
  customElements.define('custom-element', el);
}

ngDoBootstrap() {}
}