import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraEventsComponent } from './camera-events.component';

describe('EventsComponent', () => {
  let component: CameraEventsComponent;
  let fixture: ComponentFixture<CameraEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
