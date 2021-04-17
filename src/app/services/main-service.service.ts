import { Question } from './../database/models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QUESTIONS } from '../database/database';


@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  private questions = new BehaviorSubject<Question[]>([]);

  constructor() {
    this.questions.next(QUESTIONS);
  }

  getQuestion(): BehaviorSubject<Question[]> {
    return this.questions;
  }

}
