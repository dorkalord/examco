/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CensorService } from './censor.service';

describe('CensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CensorService]
    });
  });

  it('should ...', inject([CensorService], (service: CensorService) => {
    expect(service).toBeTruthy();
  }));
});
