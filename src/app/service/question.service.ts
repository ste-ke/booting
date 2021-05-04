import { Injectable } from '@angular/core';
import {Question} from 'src/app/model/question';
import {QUESTIONS} from 'src/app/mock-questions';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Answer} from 'src/app/model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffleQ(a: Question[]): Question[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffleA(a: Answer[]): Answer[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getQuestions(): Observable<Question[]> {
    const shuffledAnswers = QUESTIONS.map(q => ({
      ...q,
      answers: this.shuffleA(q.answers)
    }));
    return of(this.shuffleQ(shuffledAnswers));
  }
}
