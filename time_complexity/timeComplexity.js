/*
The Big-O notation measures the worst-case complexity of an algorithm. In Big-O
notation, n represents the number of inputs. The question asked with Big-O is the
following: “What will happen as n approaches infinity?”
When you implement an algorithm, Big-O notation is important because it tells you
how efficient the algorithm is.
 */

//Question
//Calculate the time complexities for each of the exercise code snippets.

/*
 O(n*2 )
There are two nested loops. Ignore the constants in front of n.
*/
function someFunction1(n) {

    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }

}

/*
O(n 3 )
There are four nested loops, but the last loop runs only until 10.
*/

function someFunction2(n) {
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < n; j++) {

            for (var k = 0; k < n; k++) {

                for (var l = 0; l < 10; l++) {
                    console.log(i + j + k + l);

                }

            }

        }

    }

}

/*
O(1)
Constant complexity. The function runs from 0 to 1000. This does
not depend on n.
*/
function someFunction3(n) {

    for (var i = 0; i < 1000; i++) {
        console.log("hi");

    }
}


/*
O(n)
Linear complexity. The function runs from 0 to 10n. Constants are
ignored in Big-O. 
*/
function someFunction4(n) {

    for (var i = 0; i < n * 10; i++) {
        console.log(n);
    }

}