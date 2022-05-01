function reverseString(str) {
  //Split the string and return array
  const arrayString = str.split('');

  //Reverse the new created array elements
  const reverseArray = arrayString.reverse();

  //Join all elements of the array into a string
  const joinArray = reverseArray.join('');

  //Return the reversed string
  return joinArray;
}

console.log(reverseString('Allen'));
