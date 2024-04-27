import readlineSync from 'readline-sync';

function gcd(a, b) {
  let aCopy = a;
  let bCopy = b;

  while (bCopy !== 0) {
    const temp = bCopy;
    bCopy = aCopy % bCopy;
    aCopy = temp;
  }
  return aCopy;
}

export default function theLargestCommonDivisor(name) {
  let correctAnswersCount = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (correctAnswersCount < 3) {
    const randomNumber1 = Math.floor(Math.random() * 100) + 1;
    const randomNumber2 = Math.floor(Math.random() * 100) + 1;

    const correctAnswer = gcd(randomNumber1, randomNumber2);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (correctAnswer === Number(userAnswer)) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
