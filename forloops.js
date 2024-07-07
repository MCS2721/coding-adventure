// -------------------------------------------------------------------------------------------------------
    /* This code file displays how the 'for' loop functions.

    Date: 7/6/2024      Coder: Christine Searles 
    */
// -------------------------------------------------------------------------------------------------------
// ~~~~~ For Loop Examples ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');
    /* Task 1:
        Print Numbers: Write a 'for' loop that prints numbers from 1 to 10. */

    for (var i = 1; i <= 10; i++) {
        console.log("Line:", i);
    }
    console.log('You have reached the end!');

    /* 3 declarations in the for loop:
        1. var i = 1; this tells the counter where to start
        2. i <= 10; this tells the counter where to stop
        3. i++; this changes the value of i on each loop, incrementally */


    console.log('- - - - -');
    /* Task 2:
        Count by Evens: Write a 'for' loop that prints only the even numbers from 0 to 20. */

    for (var i = 0; i <= 20; i += 2) {
        console.log(i);
    }
    console.log("You counted by 2!");


    console.log('- - - - -');
    /* Task 3:
        Sum of numbers: Write a 'for' loop that calculates the sum of numbers from 1 to 50. */

    var sum = 0; // starting the sum at 0 ensures the correct output after the loop is complete
    for (var i = 1; i <= 50; i++) {
        sum += i; // this adds the current value of 'i' to 'sum' during each iteration of the loop
    }
    console.log("The sum of numbers from 1 to 50 is:", sum);


    console.log('- - - - -');
    /* Task 4:
        Factorial: Write a 'for' loop to calculate the factorial of a number. Use 5. (5! = 5*4*3*2*1) */

    var number = 5;
    var factorial = 1; // this variable will store the factorial value and is assigned 1 because multiplying by 1 does not change the value

    for (var i = 1; i <= number; i++) {
        factorial *= i; // *= is a compound assignment. It multiplies the value of 'factorial' by 'i' and assigns (=) the result back to 'factorial'
    }
    console.log("The factorial of " + number + " is:", factorial);
// -------------------------------------------------------------------------------------------------------
