/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExamDatatrasferService } from './exam-datatrasfer.service';

describe('ExamDatatrasferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamDatatrasferService]
    });
  });

  it('should ...', inject([ExamDatatrasferService], (service: ExamDatatrasferService) => {
    expect(service).toBeTruthy();
  }));
});
