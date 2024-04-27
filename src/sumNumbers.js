import readlineSync from 'readline-sync';

export default function sumNumbers(name) {
  let correctAnswersCount = 0;
  console.log('What is the result of the expression?');

  while (correctAnswersCount < 3) {
    const randomNumber1 = Math.floor(Math.random() * 25) + 1;
    const randomNumber2 = Math.floor(Math.random() * 25) + 1;
    const operation = Math.floor(Math.random() * 3) + 1;

    let operator = '';
    let correctAnswer = 0;

    switch (operation) {
      case 1:
        operator = '+';
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case 2:
        operator = '-';
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case 3:
        operator = '*';
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        break;
    }

    console.log(`Question: ${randomNumber1} ${operator} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    if (Number(userAnswer) === correctAnswer) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
}
