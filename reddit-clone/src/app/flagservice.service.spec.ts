import { TestBed } from '@angular/core/testing';

import { FlagserviceService } from './flagservice.service';

describe('FlagserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagserviceService = TestBed.get(FlagserviceService);
    expect(service).toBeTruthy();
  });
});
