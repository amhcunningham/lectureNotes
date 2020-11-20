// HOISTING
//possibly unique to js that you need to be aware of
//can be confusing otherwise

console.log(scissors);
var scissors = 'blue'

//logs as undefined. expecting a break? how does line 5 know the variable in line 6 exists? code reads top to bottom, that line hasn't been read yet.
//js pulls all the variables and functions to the to the top of the file, allows variables to be defined after you use them
//scissors gets 'hoisted' to the top of the code and console.log is read

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}

hoistTest();

//logs undefined, 10.
//variable gets hoisted to the top and logged, and then hoistTest
//this isn't ideal- it makes for lazy coding. not recommended for actual use, but it's important to know what js is doing behind the curtain