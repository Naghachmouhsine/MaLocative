import { TestBed } from '@angular/core/testing';

import { GestionLocationService } from './gestion-location.service';

describe('GestionLocationService', () => {
  let service: GestionLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
