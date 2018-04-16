/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GradeService } from './grade.service';

describe('GradeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradeService]
    });
  });

  it('should ...', inject([GradeService], (service: GradeService) => {
    expect(service).toBeTruthy();
  }));
});
