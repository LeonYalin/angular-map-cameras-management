import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';


@NgModule({
  declarations: [CamerasComponent],
  imports: [
    CommonModule,
  ],
  exports: [CamerasComponent]
})
export class CamerasModule { }
