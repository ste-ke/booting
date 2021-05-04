import { Question } from 'src/app/model/question';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Was ist zu tun, wenn vor Antritt der Fahrt nicht feststeht, wer Schiffsführer ist?',
    answers: [
      {
        id: 1,
        answer: 'Der verantwortliche Schiffsführer muss bestimmt werden.',
        isCorrect: true
      },
      {
        id: 2,
        answer: 'Der verantwortliche Schiffsführer muss gewählt werden.',
        isCorrect: false
      },
      {
        id: 3,
        answer: 'Ein Inhaber eines Sportbootführerscheins muss die Fahrzeugführung übernehmen.',
        isCorrect: false
      },
      {
        id: 4,
        answer: 'Ein Inhaber eines Sportbootführerscheins muss die Verantwortung übernehmen.',
        isCorrect: false
      }
    ]
  },
  {
    id: 2,
    question: 'what is 2',
    answers: [
      {
        id: 1,
        answer: 'correct',
        isCorrect: true
      },
      {
        id: 2,
        answer: 'false',
        isCorrect: false
      }
    ]
  }
];
