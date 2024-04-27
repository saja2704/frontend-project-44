import readlineSync from 'readline-sync';

function gcd(a, b) {
	while (b !== 0) {
		let temp = b;
		b = a % b;
		a = temp;
	}
	return a;
}

export default function theLargestCommonDivisor(name) {
	let correctAnswersCount = 0;
	console.log('Find the greatest common divisor of given numbers.');

	while (correctAnswersCount < 3) {
		const randomNumber1 = Math.floor(Math.random() * 100) + 1;
		const randomNumber2 = Math.floor(Math.random() * 100) + 1;

		const correctAnswer = gcd(randomNumber1, randomNumber2);

		console.log(`Question: ${randomNumber1} ${randomNumber2}`);
		let userAnswer = readlineSync.question('Your answer: ').toLowerCase();

		if (correctAnswer === Number(userAnswer)) {
			correctAnswersCount += 1;
			console.log('Correct!');
		} else {
			console.log(
				`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
			);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
	console.log(`Congratulations, ${name}!`);
}
