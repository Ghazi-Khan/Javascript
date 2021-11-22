// Author : Ghazi Khan
// Date   : 22/11/2021

// JS Regex


// using the Method test

/*
    Description :
        Test() return boolean value true/false.
*/

// Simple example
const myString1 = 'Hello World, Ghazi Khan!';
const regex1 = /Hello/;                        // This regex will do case-sensitive search
const result1 = regex1.test(myString1);
console.log('Example 1: ', result1);


// Match literal strings
const myString2 = 'Hi, Ghazi how are you, do you like JS ?';
const regex2 = /like/;
const result2 = regex2.test(myString2);
console.log('Example 2: ', result2);

// here we are going to use OR operator in regrex (|)
// Match a literal string with different Possibilities
const myString3 = `Which tech do you like, development, data science, machine learning, devOps ?`;
const regex3 = /development|data science/;
const result3 = regex3.test(myString3);
console.log('Example 3 : ',result3);

// here we will set the flag to perform case-insensitive search
const myString4 = 'Hello Ghazi, whats going on?';
const regex4 = /ghazi/i;        // falg 'i' is used to perform case-insensitive search
const result4 = regex4.test(myString4);
console.log('Example 4 : ',result4);


// Extract matches

const myString5 = 'here is the first example where we are going to extract the match string - first';
const regex5 = /first/;
const result5 = myString5.match(regex5);
console.log('Example 5 : ', result5);


