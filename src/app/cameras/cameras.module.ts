import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras.component';
import { CameraComponent } from './camera/camera.component';
import { MatListModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [CamerasComponent, CameraComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [CamerasComponent]
})
export class CamerasModule { }
