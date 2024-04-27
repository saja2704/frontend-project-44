import readlineSync from 'readline-sync';

function createArray(length, value) {
	let randomValue = Math.floor(Math.random() * 20) + 1;
	let randomNumberProgression = Math.floor(Math.random() * 4) + 1;
	length = 10;
	value = randomValue;
	let newArray = [];

	for (let i = 0; i < length; i += 1) {
		newArray.push(value);
		value += randomNumberProgression;
	}
	return newArray;
}

function createColon(newArray) {
	const randomIndex = Math.floor(Math.random() * newArray.length);
	return newArray.map(function (element, index) {
		if (index === randomIndex && typeof element === 'number') {
			return '..';
		} else {
			return element;
		}
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
		let userAnswer = readlineSync.question('Your answer: ').toLowerCase();

		if (Number(userAnswer) === missingNumber) {
			correctAnswersCount += 1;
			console.log('Correct!');
		} else {
			console.log(
				`${userAnswer} is wrong answer ;(. Correct answer was ${missingNumber}.`
			);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(console.log(`Congratulations, ${name}!`);)
}
