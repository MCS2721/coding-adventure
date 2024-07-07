// -------------------------------------------------------------------------------------------------------
    /* This code file displays how to work with conditional statements. Specifically IF, ELSE IF, ELSE statements
    and Switch statements.

    Date: 7/6/2024      Coder: Christine Searles 
    */
// -------------------------------------------------------------------------------------------------------
// ~~~~~ IF/ELSE Statement ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');    
    /* Task 1:
        A driving student wants to practice for her driving exam. The exam consists of 50 questions and the student must get 40 or 
        more questions correct in order to pass. First we must declare a variable for the results. Then we must use the IF/ELSE 
        statement to let the student know if she passed or failed. */

        var result = 30;

        if (result > 40) {
            console.log("Congratulations! You passed!");
        } else {
            console.log("Unfortunately you did not pass.");
        }

        // Example of the 'else' output
    console.log('- - - - -');     
        var result = 30;

        if (result > 40) {
            console.log("Congratulations! You passed!");
        } else {
            console.log("Unfortunately you did not pass.");
        }

        /* With 'result=30', the variable did not meet the condition of the first 'if' statement. This gave an output of 'false'. So it
        moves onto the next condition in the 'else' portion. Because of the mindset "if not this, then that", it outputs the fail message. */

// -------------------------------------------------------------------------------------------------------
// ~~~~~ IF/ELSE IF/ELSE Statement ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -');  
    /* Task 2:
        1. Declare a variable age using the var keyword and set it to the number 10.
        2. Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".
        3. Add an "else if", where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
        4. Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".
        5. Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
            Try adjusting the age and executing the program to see how it will affect the output. */

        var age = '71';

        if (age >= 65) {
            console.log("You get your income from your pension");
        } else if (age < 65 && age >= 18) {
            console.log("Each month you get a salary");
        } else if (age < 18) {
            console.log("You get an allowance");
        } else {
            // this block will run if no condition matches
            console.log("The value of the age variable is not numerical")
        } 
        
        // ran age=10. output: "You get an allowance"
        // ran age=75. output: "You get your income from your pension"
        // ran age=53. output: "Each month you get a salary"
        // ran age=5.  output: "You get an allowance"
        // ran age='five' output: "The value of the age variable is not numerical"

// -------------------------------------------------------------------------------------------------------
// ~~~~~ Switch Statement ~~~~~
// -------------------------------------------------------------------------------------------------------
    console.log('- - - - -'); 
    /* Task 3:
        1. On the next line, define a new variable, name it day, and set its value to "Sunday".
        2. Start coding a switch statement, passing the day variable as the expression to evaluate.
        3. Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
        4. At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
        5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days. */

        var day = "tuesday";

        switch (day) {
            case 'Monday':
                console.log('Go to the beach');
                break;
            case 'Tuesday':
                console.log('Deadliest Catch at 8');
                break;
            case 'Wednesday':
                console.log('Practice Coding');
                break;
            case 'Thursday':
                console.log('Piano lessons');
                break;
            case 'Friday':
                console.log('Game night!!');
                break;
            case 'Saturday':
                console.log('Walk downtown');
                break;
            case 'Sunday':
                console.log('Chill and relax');
                break;
            default:
                console.log('There is no such day OR your day is not properly capitalized');
        }

        // ran day=Sunday.    output: Chill and relax
        // ran day=Wednesday. output: Practice Coding
        // ran day=Friday.    output: Game Night
        // ran day=tuesnoon.  output: there is no such day
        // ran day=tuesday.   output: there is no such day. Because of the capital T
// -------------------------------------------------------------------------------------------------------
