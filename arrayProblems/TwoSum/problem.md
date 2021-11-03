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
2. goal=13

</p>

```
JavaScript:

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
}

```
