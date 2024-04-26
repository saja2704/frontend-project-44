import readlineSync from 'readline-sync';

function generatePrimeNumber() {
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
	let randomNumber1 = Math.floor(Math.random() * 1000) + 2;
	console.log(`Question: ${randomNumber1}`);
	for (let i = 2; i <= Math.sqrt(randomNumber1); i += 1) {
		if (randomNumber1 % i === 0) {
			return false;
		}
	}
	return true;
}

export default function isPrimeNumber(name) {
	let correctAnswersCount = 0;
	while (correctAnswersCount < 3) {
		let isPrime = generatePrimeNumber();
		let correctAnswer = isPrime ? 'yes' : 'no';
		let userAnswer = readlineSync.question('Your answer: ').toLowerCase();
		if (userAnswer === correctAnswer) {
			console.log('Correct!');
			correctAnswersCount += 1;
		} else {
			console.log(
				`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
			);
			console.log(`Let's try again, ${name}!`);
			return;
		}
	}
}

function isPrimeCheck(number) {
	if (number < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(number); i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}
