//A function to display the factors of a number

function findFactors(number) {

    console.log(`The factors of ${number} is:`)
    for (let i = 1; i <= number; i++) {
        //Check if number is a factor
        if (number % i == 0) {
            console.log(i)
        }
    }

}

findFactors(4);
/* The factors of 4 is:
1
2
3
4
*/