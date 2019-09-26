import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { SomethingComponent } from './something/something.component';

@NgModule({
  imports: [
  ],
  declarations: [MylibComponent, SomethingComponent],
  exports: [MylibComponent]
})
export class MylibModule { }
