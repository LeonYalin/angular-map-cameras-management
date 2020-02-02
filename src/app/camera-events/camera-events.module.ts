import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraEventsComponent } from './camera-events.component';
import { EffectsModule } from '@ngrx/effects';
import { CameraEventsEffects } from './camera-events.effects';
import { CameraEventComponent } from './camera-event/camera-event.component';
import { MatIconModule, MatButtonModule, MatListModule } from '@angular/material';



@NgModule({
  declarations: [CameraEventsComponent, CameraEventComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    EffectsModule.forFeature([CameraEventsEffects])
  ],
  exports: [CameraEventsComponent]
})
export class CameraEventsModule { }
