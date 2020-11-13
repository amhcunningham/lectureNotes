/*
Variables
*/

//a variable is a bucket to store other stuff

var a = 1;
var b = 2;
console.log(a+b)

//notes on naming variables
//1 variable must begin with letter, _, or $
//2 numbers may follow, but can't come first
//3 JS is case sensitive-- hello and Hello are dif variables

/*
declarations, initializations, assignment
*/

//declarations refer to when we 'declare' a variable- just saying hey, here's a thing and we gave it a name

//initializations refer to when a variable is assigned a value- what is the value of the bucket?

//assignment refers to giving the variable a value, can be after initialization- the value of the bucket can be changed, the bucket can be used to hold other stuff

var x;
console.log(x)
//declaration is undefied because there's no value assigned to the stuff in the bucket
x = 10;
console.log(x)

x = 33
console.log(x)

var y;
console.log(y)
y = 'hello'
console.log(y)
y = 'you is my fren'
console.log(y)

//var, let, and const
//var = old keyword
//let = new keyword
//const = also 'new', declares unchangeable var

let tonight = 'great'
//let gives you more predictable behavior, allows for more complex code
const elevenFifty = 'amazing'
console.log(tonight, elevenFifty)
tonight = 'lovely'