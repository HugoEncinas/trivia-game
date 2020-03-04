export const home: any = {
  begin: false,
  results: [
    {
      category: 'History',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Japan was part of the Allied Powers during World War I.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Unturned originally started as a Roblox game.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Entertainment: Comics',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'General Knowledge',
      type: 'boolean',
      difficulty: 'hard',
      question:
        '&quot;Number 16 Bus Shelter&quot; was a child&#039;s name that was approved by the New Zealand government.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'hard',
      question: 'DHCP stands for Dynamic Host Configuration Port.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Entertainment: Video Games',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'The names of Roxas&#039;s Keyblades in Kingdom Hearts are &quot;Oathkeeper&quot; and &quot;Oblivion&quot;.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Geography',
      type: 'boolean',
      difficulty: 'hard',
      question:
        'Switzerland has four national languages, English being one of them.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Entertainment: Music',
      type: 'boolean',
      difficulty: 'hard',
      question: 'The band STRFKR was also briefly known as Pyramiddd.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'boolean',
      difficulty: 'hard',
      question: 'Druid is a mage class in &quot;Log Horizon&quot;.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Mathematics',
      type: 'boolean',
      difficulty: 'hard',
      question: 'In Topology, the complement of an open set is a closed set.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
  ],
};

export const quiz: any = {
  currentQuestion: 1,
  answersTrack: [],
};

export const initialSate: any = {
  home,
  quiz,
};
