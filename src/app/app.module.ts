import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldTemplateComponent } from './hello-world-template.component';
import { HelloWorldNgIfComponent } from './hello-world-ngif/hello-world-ngif.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di/hello-world-di.component';
import { HelloWorldInterpolationComponent } from './hello-world-interpolation/hello-world-interpolation.component';
import { HelloWorldBindingsComponent } from './hello-world-bindings/hello-world-bindings.component';
import { FirstComponent } from './first-component/first.component';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    FirstComponent,
    MapComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
