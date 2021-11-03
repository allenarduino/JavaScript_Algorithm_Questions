# Search Insert position of K in a sorted array

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

<p><b><i>Time Complexity:</i></b>O(N)</p>
<p><b><i>Auxiliary Space:</i></b>O(1)</p>
