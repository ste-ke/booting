import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Question} from 'src/app/model/question';
import {Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Answer} from 'src/app/model/question';
import {of} from 'rxjs';
import {OnChanges} from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {CountingService} from 'src/app/counting.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnChanges {

  // @ts-ignore
  @Input() question: Question | undefined;

  form: FormGroup;
  answers: Array<Answer> = [];
  isCorrect = false;

  constructor(private formBuilder: FormBuilder, private countingService: CountingService) {
    this.form = this.formBuilder.group({
      answers: ['']
    });


  }

  ngOnChanges(changes: SimpleChanges): void {
    of(changes.question.currentValue.answers).subscribe((answers) => {
      this.answers = answers;
      this.form.controls.answers.patchValue(this.answers[0]?.id);
    });
  }

  submit(): void {
    const answer = this.answers.find(a => a.id === this.form.value.answers);
    if (answer?.isCorrect) {
      this.countingService.addPoint();
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
}
