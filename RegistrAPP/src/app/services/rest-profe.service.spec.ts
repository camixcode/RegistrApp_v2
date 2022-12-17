import { TestBed } from '@angular/core/testing';

import { RestProfeService } from './rest-profe.service';

describe('RestProfeService', () => {
  let service: RestProfeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestProfeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
