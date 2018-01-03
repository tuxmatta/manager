import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavigationComponent } from './navigation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [HeaderComponent, NavigationComponent],
  exports: [HeaderComponent, NavigationComponent]
})
export class HeaderModule { }
