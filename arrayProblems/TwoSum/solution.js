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


//0(n) time complexity 
const twoSum2 = (array, goal) => {
    let mapOfNumbers = {};
    let twoIndexes = [];

    for (let i = 0; i < array.length; i++) {
        mapOfNumbers[array[i]] = i
    }

    for (let i = 0; i < array.length; i++) {
        let target = goal - arr[i];
        if (mapOfNumbers[target] !== null && mapOfNumbers[target] !== i) {
            twoIndexes.push(i);
            twoIndexes.push(mapOfNumbers[target]);
        }
    }
    return twoIndexes;
}