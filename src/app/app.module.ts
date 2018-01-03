import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HeaderModule} from './components/header.module';
//import { NavigationModule } from './components/navigation.module';
import {TestModule} from './test/test.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // bootstrap module
    NgbModule.forRoot(),
    // manager modules
    HeaderModule,
    //NavigationModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
