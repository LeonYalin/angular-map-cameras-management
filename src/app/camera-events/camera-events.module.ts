import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraEventsComponent } from './camera-events.component';
import { EffectsModule } from '@ngrx/effects';
import { CameraEventsEffects } from './camera-events.effects';



@NgModule({
  declarations: [CameraEventsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CameraEventsEffects])
  ],
  exports: [CameraEventsComponent]
})
export class CameraEventsModule { }
