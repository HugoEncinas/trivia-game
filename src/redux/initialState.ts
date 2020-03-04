export const home: any = {
  begin: false,
  results: [
    {
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [''],
    },
  ],
};

export const quiz: any = {
  currentQuestion: 1,
  answersTrack: [],
};

export const initialState: any = {
  home,
  quiz,
};
