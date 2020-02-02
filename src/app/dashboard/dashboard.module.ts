import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MapModule } from '../map/map.module';
import { CameraEventsModule } from '../camera-events/camera-events.module';
import { CamerasModule } from '../cameras/cameras.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CamerasModule,
    CameraEventsModule,
    MapModule,
  ]
})
export class DashboardModule { }
