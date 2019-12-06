import { TestBed } from '@angular/core/testing';

import { EntryRequestService } from './entry-request.service';

describe('EntryRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryRequestService = TestBed.get(EntryRequestService);
    expect(service).toBeTruthy();
  });
});
