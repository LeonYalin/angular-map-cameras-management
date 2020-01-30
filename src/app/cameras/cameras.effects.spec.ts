import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CamerasEffects } from './cameras.effects';

describe('CamerasEffects', () => {
  let actions$: Observable<any>;
  let effects: CamerasEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CamerasEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CamerasEffects>(CamerasEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
