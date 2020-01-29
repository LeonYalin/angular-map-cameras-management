import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MapModule } from '../map/map.module';
import { EventsModule } from '../events/events.module';
import { CamerasModule } from '../cameras/cameras.module';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CamerasModule,
    EventsModule,
    MapModule,
  ]
})
export class DashboardModule { }
