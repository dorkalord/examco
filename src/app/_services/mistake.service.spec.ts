/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MistakeService } from './mistake.service';

describe('MistakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MistakeService]
    });
  });

  it('should ...', inject([MistakeService], (service: MistakeService) => {
    expect(service).toBeTruthy();
  }));
});
