/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.*/

const palindromeNumber = (num) => {
  let string = num.toString();
  // convert string to an array
  const arrayValues = string.split('');

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join('');

  if (string == reverseString) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
};

palindromeNumber(121);
