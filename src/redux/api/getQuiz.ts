export const getQuizData: any = async () => {
  const url =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
