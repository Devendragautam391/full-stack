const secret_number = Math.floor(Math.random() * 10) + 1;
while (true){
  guess_number = prompt("Enter your guess number: ");
  guess = parseInt(guess_number);

  if (guess < secret_number){
    alert('Too low! Try again.');
  }else if (guess > secret_number){
    alert('Too high! Try again.');
  }else {
    alert("Correct! You guessed it.");
    break;
  }
}
