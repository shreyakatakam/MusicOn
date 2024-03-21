import { TestBed } from '@angular/core/testing';

import { SongSelectionService } from './song-selection.service';

describe('SongSelectionService', () => {
  let service: SongSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
