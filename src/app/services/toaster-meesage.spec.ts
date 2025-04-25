import { TestBed } from '@angular/core/testing';

import { ToasterMessageService } from './toaster-meesage.service';

describe('ToasterService', () => {
  let service: ToasterMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToasterMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
