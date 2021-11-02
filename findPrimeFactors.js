//A function to print prime factors of a number

function findPrimeFactors(number) {
    let arr = [];

    for (let i = 2; i < number; i++) {
        let isPrime;
        if (number % i === 0) {
            isPrime = true;
            for (let j = 2; j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                }
            }
        }
        if (isPrime == true) {
            arr.push(i)
        }
    }
    console.log(arr);


}

findPrimeFactors(300);

//Time complexity is O(n*2)