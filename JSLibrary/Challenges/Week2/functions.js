// functions: 
// -js functions are defined with the function keyword, and can be written as a function declaration or a function expression

// -function declarations are hoisted in the code and run only when we call them/invoke them. so any function in the code sits and waits to be run until we call it by name. think of it as a student with their hand up waiting to ask a question. the student doesn't ask the question until they're called on

//function expressions are not hoisted and are generally stored in variables

//functions without names are known as anonymous functions.

//function delcaration:

function sayHello() {
    console.log("Hi");
}
sayHello()

//function expression
let greetings = function (){
    console.log("Hey there all you cats and kittnes!")
}
greetings()

//parameters
//functions can take in info when invoked; think of parameters as a newly declared variable with an as-yet undeclared value- like a placeholder
//the value we pass into the function when it's called to run (known as an argument) is the value that gets assigned to the parameter
//general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function; if we're passing an integer, we might name the parameter NUM or NUMBER
                //husky is the placeholder
// function myDog(husky) {
//     console.log(`My dog's name is ${husky}`);
// }
// myDog("Bruno");
// myDog("Pilot");
// myDog("Pip");

// function allMyCats(black, tabby, longhair) {
//     console.log(`My cats are named ${black}; ${tabby}; and ${longhair}.`)
// }
// allMyCats("Loki, God of Mischief", "Frankenstein, King of Demons", "Roxie, the Goblin Queen")

// //return- functions can also manipulate the data sent to them via arguments, and return a new value

// //any code below the return is not executed

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return average;
}
let averageWeight = calculator (15, 60, 55);
console.log(averageWeight);

// //arrow functions
// //aka fat arrow functions
// //introduced in ES6
// //basically just a more concise way to write function expressions - NOT DECLARATIONS
// //this means that arrow functions do not get hoisted
// //two types: concise body and block body
// //return happens automatically with concise body, but not with block

// //concise body arrow function:
// let speak = (name) => console.log(`My name is ${name}.`);
// speak("Angie");

// let nameJoiner = (first, last) => `${first} ${last}`;
// let fullName = nameJoiner("Angie", "Cunningham");
// console.log(fullName);

//block body
// let speaks = (name) => {
//     console.log(`${name} says hi!`);
// }
// let nameJoiner = (first, last) => {
//     return `${first} ${last}`;
// }
// let fullName = nameJoiner("Angie", "Cunningham");
// console.log(fullName);

//practice

// function rectangle(length, width) {
//     let area = length*width;
//     return area;
// }
// let area1 = (4*8);
// let area2 = (5*6);
// console.log(area1);
// console.log(area2);

function dogToHumanYears(dogAge){
    let humanAge = (dogAge -2) * 4 + 21;
    return humanAge;
}
console.log(dogToHumanYears(11));