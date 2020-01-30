import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { CameraComponent } from './camera/camera.component';
import { MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { CamerasEffects } from './cameras.effects';


@NgModule({
  declarations: [CamerasComponent, CameraComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    EffectsModule.forFeature([CamerasEffects]),
  ],
  exports: [CamerasComponent]
})
export class CamerasModule { }
