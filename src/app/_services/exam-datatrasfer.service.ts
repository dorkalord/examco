import { Injectable } from '@angular/core';
import { ExamAttempt } from '../_models/exam-attempt';
import { ExamFull } from '../_models/exam';
import { Censor } from '../_models/censor';

@Injectable()
export class ExamAttemptDataTransferService {
  constructor() { }

  public examAttempts: ExamAttempt[];
  public currentExam: ExamFull;
  public currentExamAttempt: ExamAttempt;
  public currentCensor: Censor;
}

export class critereaDisplay{
  public name: string;
  public examCritereaID: number;
  public calculated: number;
  public adjustment: number;
  public total: number;
}
