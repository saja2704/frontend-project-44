import readlineSync from 'readline-sync';

function createArray() {
  const randomValue = Math.floor(Math.random() * 20) + 1;
  const randomNumberProgression = Math.floor(Math.random() * 4) + 1;
  const newLength = 10;
  let newValue = randomValue;
  const newArray = [];

  for (let i = 0; i < newLength; i += 1) {
    newArray.push(newValue);
    newValue += randomNumberProgression;
  }
  return newArray;
}

function createColon(newArray) {
  const randomIndex = Math.floor(Math.random() * newArray.length);
  return newArray.map((element, index) => {
    if (index === randomIndex && typeof element === 'number') {
      return '..';
    }
    return element;
  });
}

export default function arithmeticProgression(name) {
  let correctAnswersCount = 0;
  console.log('What number is missing in the progression?');
  while (correctAnswersCount < 3) {
    const progressionArray = createArray();
    const arrayWithColon = createColon(progressionArray);
    const missingNumberIndex = arrayWithColon.indexOf('..');
    const missingNumber = progressionArray[missingNumberIndex];
    console.log(`Question: ${arrayWithColon.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (Number(userAnswer) === missingNumber) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${missingNumber}.`,
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
