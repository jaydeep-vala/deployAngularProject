import { TestBed } from '@angular/core/testing';

import { VServicesService } from './v-services.service';

describe('VServicesService', () => {
  let service: VServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
