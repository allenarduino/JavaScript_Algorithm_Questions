//Function to rotate an array 2 times
function rotateArray(arr, k) {
  k = k % arr.length;
  for (i = 0; i < k; i++) {
    const last_item = arr.pop();
    arr.unshift(last_item);
  }
  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
