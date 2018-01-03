import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule, NgbModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }
