import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { CameraComponent } from './camera/camera.component';
import { MatListModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { CamerasEffects } from './cameras.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCameraDialogComponent } from './add-camera-dialog/add-camera-dialog.component';


@NgModule({
  declarations: [CamerasComponent, CameraComponent, AddCameraDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    EffectsModule.forFeature([CamerasEffects]),
  ],
  exports: [CamerasComponent],
  entryComponents: [AddCameraDialogComponent]
})
export class CamerasModule { }
