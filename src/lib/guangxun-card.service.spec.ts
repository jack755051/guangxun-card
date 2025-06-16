import { TestBed } from '@angular/core/testing';

import { GuangxunCardService } from './guangxun-card.service';

describe('GuangxunCardService', () => {
  let service: GuangxunCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuangxunCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
