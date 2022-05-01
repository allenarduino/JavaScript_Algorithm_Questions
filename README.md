# Javascript data structures and algorithms Prep

# (1)Two Sum Problem

Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:

Given array = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

## Solution 1

Let's assume the input is:

1. array=[1,3,10,11,14]

2. goal=13

```js
//O(n^2) time complexity
const twoSum = (array, goal) => {
  let indexes = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (arry[i] + array[j] === goal) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
};
```

This will return an array of [1,2].

It works but if you check it out you'll notice it's running
a loop inside of a loop to figure out which two numbers add up to the goal.
That gives us a time complexity of O(n^2) which is pretty slow

## A more optimized solution

1. array=[1,3,10,11,14]</p>
2. goal=13</p>

```js
//0(n) time complexity
const twoSum = (array, goal) => {
  let mapOfNumbers = {};
  let twoIndexes = [];

  for (let i = 0; i < array.length; i++) {
    mapOfNumbers[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    let target = goal - arr[i];
    if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
      twoIndexes.push(i);
      twoIndexes.push(mapOfNumbers[target]);
    }
  }
  return twoIndexes;
};
```

# (2) Search Insert position of K in a sorted array

Given a sorted array arr consisting of N distinct integers
and an integer K,the task is to find the index of K, if it's present in the array
arr.
Otherwise otherwise,find the index where K must be inserted to keep the array sorted

You may assume no duplicates in the array.

### explanation

```
Input:
K=5,
const arr = [1, 3, 5, 6];
Output: 2
Explanation: Since 5 is found at
index 2 as arr[2]=5 the ouput is 5
```

```
Input: K=2,
const arr=[1,3,5,6]

Output:1
Explanation: Since 2 is not present
in the array but can be inserted at
index 1 to make the array sorted.
```

## Solution

```js
let findIndex = (arr, n, K) => {
  //Traverse the array
  for (let i = 0; i < n; i++) {
    //If K is found
    if (arr[i] == K) {
      return i;
    }
    //If current array element exceeds K
    else if (arr[i] > K) {
      return i;
    }
  }
  //if all elements are smaller than K
  return n;
};

//Driver code
let arr = [1, 3, 5, 6];
let n = arr.length;
let K = 2;

console.log(findIndex(arr, n, K));
//Output: 1
```

#### Time Complexity:O(N)

#### Auxiliary Space:O(1)
