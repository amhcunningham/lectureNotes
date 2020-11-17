//types

//boolean- super handy- run behind the scenes
var on = true;
console.log(on)
let off = false;
console.log(off)

//boolean is a switch: true/false, yes/no, on/off
//boolean is a binary... Boolean = Binary

//undefined- variable has been declared but not assigned a value
let grass;
console.log(grass);
var undef = undefined;
console.log(undef);

//undef is bucket you forgot to fill
//null means the var has been declared and assigned value of null

var empty = null;
console.log(empty);

//null and undef both rep vars w no value inside
//null are for gag gifts, boxes intentionally given w nothing inside- that's the gag
//undef gifts given when person giving has forgotten to put the gift inside- it's an oops

//numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999999
console.log(precise);
let rounded = 9999999999999999
console.log(rounded);
//JS breakdown after a certain point, same with negatives 
//can only handle numbers so big, can't go to infinity

let notQuite = .2 + .1;
console.log(notQuite)
//only read the places you need

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//strings
//string is any value within quotes; js spits out the value within the quotes

let stringOne = 'double quotes';
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo)

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

let third = 1050 + '100';
console.log(third)
console.log(typeof third);
//tells you what's inside the bucket

//interpolation lets you use strings with dynamic content, requires backticks

//example 1:
let age = 33;
let string = `my age is: ${age}`;
console.log(string);

//objects
//container that stores property names and values; can hold multiple data types
//denoted by {}, have keys and values -- color (key): 'blue' (value) // separated with color between key and value; each key-value pair is separated by comma

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}

//hulk is the variable, his attributes define him

console.log(hulk);
console.log(hulk.age)
console.log(hulk.color)
console.log(typeof hulk)

//arrays store multiple values in an ordered way
//objects don't have to be ordered a certain way- both hold multiple data types but in different ways
//arrays use [], holds info of a similar type, like color
//has values ('blue', 'green', 'yellow'), but not keys

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush']
console.log(stepsToBrushTeeth)
console.log(stepsToBrushTeeth[0])

//arrays are indexed from zero ascending

console.log(typeof stepsToBrushTeeth)