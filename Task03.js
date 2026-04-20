let num = parseInt(prompt('Enter a number'));
let num_is_prime = true;
if (num < 2) {
  alert(`${num} is not a prime number`);
}else {
  for (let i = 2; i <=Math.sqrt(num); i++) {
    if (num % i === 0) {
      num_is_prime = false;
      break;
    }
  }
}
if ( num_is_prime) {
      alert(`${num} is a prime number`);
    }else{
      alert(`${num} is not a prime number`);
}
