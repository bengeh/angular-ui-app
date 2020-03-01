import { TestBed } from '@angular/core/testing';

import { AppinfoService } from './appinfo.service';

describe('AppinfoService', () => {
  let service: AppinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
