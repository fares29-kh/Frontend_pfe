import { TestBed } from '@angular/core/testing';

import { SingalRService } from './singal-r.service';

describe('SingalRService', () => {
  let service: SingalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
