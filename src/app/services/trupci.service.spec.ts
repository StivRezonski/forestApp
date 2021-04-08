import { TestBed } from '@angular/core/testing';

import { TrupciService } from './trupci.service';

describe('TrupciService', () => {
  let service: TrupciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrupciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
