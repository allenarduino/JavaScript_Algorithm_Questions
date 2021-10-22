//Check prime number
function isPrime(number) {
  var divisor = 2;

  while (number > divisor) {
    if (number % divisor == 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;
}

console.log(isPrime(8));
