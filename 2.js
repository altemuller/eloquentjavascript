for (var i = 0; i < 101; i++) {
	if (i % 3 == 0 && i >= 3) {
		console.log(i, 'Fizz')
	}
	if (i % 5 == 0 && i >= 5) {
		console.log(i, 'Buzz')
	}
}

for (var i = 0; i < 101; i++) {
  if ((i % 3 == 0 || i % 5 == 0) && ((i >= 3) || (i >= 5))) {
	  console.log(i, 'FizzBuzz');
	}
}
