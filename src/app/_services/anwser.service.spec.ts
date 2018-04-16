/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnwserService } from './anwser.service';

describe('AnwserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnwserService]
    });
  });

  it('should ...', inject([AnwserService], (service: AnwserService) => {
    expect(service).toBeTruthy();
  }));
});
