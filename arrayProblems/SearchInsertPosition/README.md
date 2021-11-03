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
