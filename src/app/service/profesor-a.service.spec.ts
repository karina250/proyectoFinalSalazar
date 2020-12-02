import { TestBed } from '@angular/core/testing';

import { ProfesorAService } from './profesor-a.service';

describe('ProfesorAService', () => {
  let service: ProfesorAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesorAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
