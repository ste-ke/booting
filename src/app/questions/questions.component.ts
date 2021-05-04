import { Component, OnInit } from '@angular/core';
import {QuestionService} from 'src/app/service/question.service';
import {Question} from 'src/app/model/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {

  public questions: Array<Question> = [];
  public question: Question | undefined;

  constructor(private questionService: QuestionService) { }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.question = questions[0];
      this.questions = questions;
    });
  }
  ngOnInit(): void {
    this.getQuestions();
  }

}
