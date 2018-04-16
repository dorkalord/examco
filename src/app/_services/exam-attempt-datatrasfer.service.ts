import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../app-config';
import { User } from '../_models/user';
import { Exam } from '../_models/exam';
import { Course } from '../_models/course';

@Injectable()
export class ExamAttemptDatatrasferService {
  constructor() { }

  public currentUser: User;
  public currentExam: Exam;
  public currentCourse: Course;
}
