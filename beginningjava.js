// -------------------------------------------------------------------------------------------------------
    /* This code file displays some introductory things that I have learned in my JavaScript journey. This code 
    snippet covers declaring variables and operators.

    Date: 7/5/2024      Coder: Christine Searles 
    */
// -------------------------------------------------------------------------------------------------------
// ~~~~~ Declaring Variables ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');

        var personsName = "Christine";
        console.log(personsName); // this delivers the output

        var stateID = "15A448D"; // must use double quotes due to string format
        var animal = "Horse";

        console.log("Name:", personsName);
        console.log("State ID:", stateID);
        console.log("Favorite Animal:", animal);

        var animalSound = "Neigh";

        console.log("My favorite animal, " + animal + " makes this sound:", animalSound);

        animalSound = "Woof";

        console.log("My favorite animal, " + animal + " now makes this sound:", animalSound);

// -------------------------------------------------------------------------------------------------------
// ~~~~~ &&, ||, ! Operators ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');
    /* Example 1: 
        You are tasked with coming up with some code that will check if the 'currentTime' variable is between 
        9a.m. and 5p.m. The code needs to console.log 'true' if 'currentTime' > 9 AND if 'currentTime' < 17 (military time). */

        var currentTime = 10;
        console.log(currentTime > 9 && currentTime < 17); // outputs true
        console.log(true && true); // This displays how the logical AND operator works when both operands are 'true'

        // console.log(true || true) outputs: true
        // console.log(true || false) outputs: false
        // console.log(false || true) outputs: false
        // console.log(false || false) outputs: false

    console.log('- - - - -');
    /* Example 2: 
        You need to write a program in JS which will return 'true' if the value of 'currentTime' variable is NOT between 9 and 17.
        Your code needs to console.log 'true' if the value of the variable 'currentTime' is either less than 9 or greater than 17. */

        var currentTime = 7;
        console.log(currentTime < 9 || currentTime > 17); // Outputs 'true' becuase 7 is less than 9, which meets 1 of the conditions
        console.log(true || false); // This displays how the logical OR operator works when at least 1 condition is 'true'

        // console.log(true || true) outputs: true
        // console.log(true || false) outputs: true
        // console.log(false || true) outputs: true
        // console.log(false || false) outputs: false

    console.log('- - - - -');
    /* Example 3:
        You need to write a program in JS that will tell me if the pet is hungry or not. Use the ! NOT operator to complete this.
        Create a variable named 'petHungry' and assign the Boolean of 'true'. */

        var petHungry = true;

        console.log("Pet is hungry: ", petHungry);
        console.log('Feeding the pet');
        console.log("Pet is hungry: ", !petHungry); // The ! NOT operator changes the result, temporarily, from 'true' to 'false'
        console.log(petHungry);

// -------------------------------------------------------------------------------------------------------
// ~~~~~ Brief Overview of Operators ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');    
    /* Task 1:
        You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.
            1. Create a variable named score and set it to 8
            2. Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator.
            The expected output in the console should be: "Mid-level skills: true". */

        var score = 8;
        console.log("Mid-level skills: ", score > 0 && score < 10); // outputs "Mid-level skills: true"
    
        console.log('- - - - -');
    /* Task 2:
        Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.
        You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.
        Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.
        Complete the task using the following steps:
            1. Declare the variable timeRemaining, and assign the value of 0 to it.
            2. Declare the variable energy, and assign the value of 10 to it.
            3. Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
            Note that the expected output in the console should be: "Game over: true". */
        
        var timeRemaining = 5;
        var energy = 0;
        console.log("Game over: ", timeRemaining == 0 || energy == 0); // == means 'equal to'
        // outputs: "Game Over: true"

    console.log('- - - - -');
    /* Task 3:
        You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).
        To achieve this task, you need to declare six variables, as follows:
            1. The first variable, named num1, should be assigned a number value of 2.
            2. The second variable, named num2, should be assigned a number value of 5.
            3. The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
            4. The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
            5. The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
            6. The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
                Run console log two times after you've set the variables:
            7. The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
            8. The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
            Note: The output to the console should be as follows:
                Is 2 an even number? true
                Is 5 an even number? False */

        var num1 = 2;
        var num2 = 5;
        var test1 = num1 % 2; // returns a number
        var test2 = num2 % 2; // returns a number
        var result1 = test1 == 0;
        var result2 = test2 == 0;
        console.log("Is", num1, "an even number?", result1);
        console.log("Is", num2, "an even number?", result2);

    console.log('- - - - -');
    /* Task 4:
        Console log the result of adding two numbers, 5 and 10, using the + operator.
            Note: This task should be completed on a single line of code. The output in the console should be 15. */
    
        console.log(5 + 10);

    console.log('- - - - -');
    /* Task 5:
        Code a new variable and name it counter, assigning it to the value of 0.
        On the next line, use the += operator to increase the value of counter by 5.
        On the next line, use the += operator to increase the value of counter by 3.
        On the fourth line, console log the value of the counter variable.
        Note: The output value should be 8. */

        var counter = 0;
        counter += 5;
        counter += 3;
        console.log(counter);
// -------------------------------------------------------------------------------------------------------
