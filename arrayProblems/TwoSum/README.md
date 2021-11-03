# Two Sum Problem

Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:

Given array = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

## Solution 1

<p>Let's assume the input is:</p>

<p>
1. array=[1,3,10,11,14]
</p>
<p>
2. goal=13
</p>

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

<p>It works but if you check it out you'll notice it's running
a loop inside of a loop to figure out which two numbers add up to the goal.
That gives us a time complexity of O(n^2) which is pretty slow
</p>

## A more optimized solution

<p>1. array=[1,3,10,11,14]</p>
<p>2. goal=13</p>

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
