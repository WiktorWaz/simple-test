import { MainServiceService } from './../services/main-service.service';
import { Question } from '../database/models';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  questions: Question[] = [];

  points = 0;
  indexNum = 1;
  testFinish = false;

  constructor(private service: MainServiceService) { }

  ngOnInit(): void {
    this.service.getQuestion().subscribe(questions => this.questions = questions);
  }

  indexNumInc() {
    this.indexNum < 6 ? this.indexNum++ : this.indexNum;
    this.indexNum === 6 ? this.testFinish = true : this.indexNum;
  }
  checkAnswer(answer: number) {
    this.questions[this.indexNum - 2].rightAnswer === answer ? this.points += 100 : this.points;
  }

  reloadPage() {
    window.location.reload();
  }

}
