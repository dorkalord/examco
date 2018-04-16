/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExamAttemptService } from './exam-attempt.service';

describe('ExamAttemptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamAttemptService]
    });
  });

  it('should ...', inject([ExamAttemptService], (service: ExamAttemptService) => {
    expect(service).toBeTruthy();
  }));
});
