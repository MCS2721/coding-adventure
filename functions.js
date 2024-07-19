// -------------------------------------------------------------------------------------------------------
    /* This code file displays how to create functions, call functions, and includes examples.

    Date: 7/19/2024      Coder: Christine Searles 
    */
// -------------------------------------------------------------------------------------------------------
// ~~~~~ What are functions? ~~~~~
// -------------------------------------------------------------------------------------------------------
function simpleMath() {
    var a = 5;
    var b = 10;
    var c = a + b;

    console.log(c);
}
simpleMath(); // calling the function

// -------------------------------------------------------------------------------------------------------
/* A function is like a sticky note. You write important information on the sticky note and place it somewhere safe. It just sits there untill
you pick it up and decide to use it. functions work the same way. They are ready to do something but only when called upon. In this example,
the function has "closed-doors"...aka there is nothing in the parenthesis after the function name. This means there is no outside data 
required to make this function run. Simply "call" the function by it's name and let it run. There are 3 variables defined. Variable c takes the 
sum of 'a' and 'b' and spits out the answer.

The downfall to this style of function is it will ALWAYS output the same answer. Unless your code is needed to calculate the same thing repeatedly,
this style of function may not be the most favorable.*/                                                                                                                                                                                                                                                                                                                                                                                                                                                               
// -------------------------------------------------------------------------------------------------------
console.log('- - - - -'); // just some extra line space

function simpleMath2(a, b) {
    var c = a + b;

    console.log(c);
}
simpleMath2(4, 5); // calling the function
simpleMath2("I like the color ", "blue");

// -------------------------------------------------------------------------------------------------------
/* This function works exactly like the first example, but there's a difference. This function has "open doors"...aka there is parameters inside
the parenthesis. This means that this function relies on outside information to make the function work. The names in the parenthesis are simply
placeholders. However, they do need to match up with the body of the function. Simply call the function by it's name, "simpleMath(4, 5);". 
Inside the parenthesis, you can specify that values of 'a' and 'b'. The values can be letters, numbers, names, etc. */
// -------------------------------------------------------------------------------------------------------
console.log('- - - - -'); // just some extra line space

// -------------------------------------------------------------------------------------------------------
/* Task 1: Write a function called 'calculateArea' that takes the length and width of a rectangle as parameters and returns 
the area of the rectangle. */
// -------------------------------------------------------------------------------------------------------
function calculateArea(length, width) {
    var area = length * width;
    console.log(area);
}
calculateArea(4, 8);

console.log('- - - - -'); // just some extra line space

// -------------------------------------------------------------------------------------------------------
/* Task 2: Write a function called 'isPalindrome' that takes a string as a parameter and returns true if the string is a palindrome. */
// -------------------------------------------------------------------------------------------------------
function isPalindrome(word) {
    var length = word.length;
    for (var i = 0; i < length / 2; i++) {
        if (word[i] !== word[length - 1 - i]) {
            console.log("This word is not a Palindrome");
            return;
        }
    }
    console.log("This word", word, "is a Palindrome");
}

isPalindrome("racecar");
isPalindrome("nautical");

// -------------------------------------------------------------------------------------------------------
/* This function looks complex, so let's break it down. I created a function called 'isPalindrome' that relies on an outside piece. The parameter
(word). I created a variable, length, that stores the length of the 'word'. Next, there is a 'for' loop that sets a variable 'i' to 0 to begin. 
The loop continues to run as long as 'i' is less than half the length of the 'word'. This is because you only need to check up to the middle of
the word because each character on one side of the middle is mirrored on the other side in a palindrome. After reach loop completes, 'i' is incremented.

The 'return' is a force stop that intentionally causes the function to stop dead in it's tracks. Think of this saying "I'm done here". Any code
after that 'return' will not be executed.

Once out of the 'for' loop, the function will display a message saying "This word ___ is a Palindrome" as long as the 'if' statement returns
false. If the statement returns true, the message will say "This word is not a Palindrome". It sounds a little backwards, but the 'if' statement
is checking for IF the letters in 'word' are NOT true !== or are not equal to length / 2 as explained above. */
// -------------------------------------------------------------------------------------------------------
console.log('- - - - -'); // just some extra line space

// -------------------------------------------------------------------------------------------------------
/* Task 3: Write a function called 'letterFinder' that accepts 2 parameters: word and match. Code a 'for' loop inside the function's body. The
'for' loop's counter should start at 0, increment by 1 on each iteration, and exit when the counter variable's value is equal to the length
of the 'word' parameter. Add an 'if' statement inside the 'for' lop whose condition works as follows: (a) Access each of the letters inside
the passed in 'word' using the counter variable, with 'word[i]'. (b) Check if the current 'word[i]' is equal to the value of 'match'. */
// -------------------------------------------------------------------------------------------------------
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log('Found the', match, 'at', i);
        }
        else {
            console.log('....No match found at', i);
        }
    }
}

letterFinder("test", "t");
console.log('- - - - -'); // just some extra line space
letterFinder("Christine", "i");

console.log('- - - - -'); // just some extra line space
// -------------------------------------------------------------------------------------------------------
/* Task 4: Write a function called 'capitalizeWords' that takes a sentence as a parameter and returns the sentence with the first letter of
each word capitalized. */
// -------------------------------------------------------------------------------------------------------
function capitalizeWords(sentence) {
    var capitalizedSentence = ''; // This will store the final result
    var capitalizeNext = true; // Flag to indicate if the next character should be capitalized

    for (var i = 0; i < sentence.length; i++) {
        var currentChar = sentence[i];

        if (currentChar === ' ') {
            capitalizedSentence += ' '; // Add space to the sentence
            capitalizeNext = true; // Next non-space character should be capitalized
        } 
        else {
            if (capitalizeNext) {
                capitalizedSentence += currentChar.toUpperCase(); // Capitalizes the character
                capitalizeNext = false; // Reset flag after capitalizing
            } 
            else {
                capitalizedSentence += currentChar; // Add the current character as is
            }
        }
    }
    console.log(capitalizedSentence);
}
console.log("this sentence is actually a title.");
capitalizeWords("this sentence is actually a title.");
// -------------------------------------------------------------------------------------------------------
/* This function relies on 1 outside parameter. In this case, a sentence. There's 2 variables defined: 'capitalizedSentence' and 'capitalizeNext'.
'CapitalizedSentence' stores the end result after everything has been properly capitalized. It is intentionally left empty. 'CapitalizeNext' is
a Boolean flag to track whether the next character should be capitalized. It is set to 'true'. The 'for' loop iterates through each character
in 'sentence'. 'i' is the loop counter' and 'currentChar' is the character at the current position ('sentence[i]').

The 'if' statement checks for any spaces and adds the space to the reult variable (capitalizedSentence) then tells the code to capitalize the next 
character in the sentence. ELSE...however, if the 'currentChar' is not a space, add the current character as is. This is done by setting the
capitalizeNext variable to false.

Once the code is complete, output the final result. */
// -------------------------------------------------------------------------------------------------------