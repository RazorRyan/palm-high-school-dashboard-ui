import { TestBed } from '@angular/core/testing';

import { PalmHighschoolServiceService } from './palm-highschool-service.service';

describe('PalmHighschoolServiceService', () => {
  let service: PalmHighschoolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalmHighschoolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
