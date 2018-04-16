/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExamAttemptDatatrasferService } from './exam-attempt-datatrasfer.service';

describe('ExamAttemptDatatrasferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamAttemptDatatrasferService]
    });
  });

  it('should ...', inject([ExamAttemptDatatrasferService], (service: ExamAttemptDatatrasferService) => {
    expect(service).toBeTruthy();
  }));
});
