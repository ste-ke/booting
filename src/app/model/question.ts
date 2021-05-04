export interface Question {
  id: number;
  question: string;
  answers: Array<Answer>;
}

export interface Answer {
  id: number;
  answer: string;
  isCorrect: boolean;
}
