import { TestBed } from '@angular/core/testing';

import { LeerProfService } from './leer-prof.service';

describe('LeerProfService', () => {
  let service: LeerProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
