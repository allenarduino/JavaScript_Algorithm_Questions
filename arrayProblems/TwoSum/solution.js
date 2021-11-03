//O(n^2) time complexity
const twoSum1 = (array, goal) => {
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