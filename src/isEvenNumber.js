import readlineSync from 'readline-sync';

function isEven(num) {
	return num % 2 === 0;
}

export default function playGame() {
	console.log('Welcome to the Brain Games!');

	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}`);

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	let correctAnswersCount = 0;

	while (correctAnswersCount < 3) {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log(`Question: ${randomNumber}`);
		let userAnswer = readlineSync.question('Your answer: ').toLowerCase();

		if (userAnswer === 'yes' || userAnswer === 'no') {
			const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

			if (userAnswer === correctAnswer) {
				correctAnswersCount += 1;
				console.log('Correct!');
			} else {
				console.log(
					`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`
				);
				console.log(`Let's try again, ${name}!`);
				return;
			}
		} else {
			console.log('Your answer is invalid. Please enter "yes" or "no".');
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}

	console.log(`Congratulations, ${name}!`);
}
