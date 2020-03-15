import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppinfoService } from './appinfo.service';

describe('AppinfoService', () => {
  let service: AppinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(AppinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
    service.getGitHubInfo("bengeh").then(value => {
      expect(value[0].fullName).toBe('bengeh/add-test');
      done();
    });
  });
});
