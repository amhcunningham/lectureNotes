//let's play with objects and arrays, yeah?

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
console.log(weekDays.toString());

//.toString- turns the contents of your variable, whatever it is, into string

console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}
console.log(soup.c);

//array and object literals (complex or dynamic, lots going on); primitives are booleans, strings, undefineds, nulls, etc
//arrays and objects can hold both primitive and complex

let complexArrLiteral = [1, true, 'academy', [1,2,3], {key: 'test'}, function(){return 'yes'}];

//indexed in an array just like anything else

console.log(complexArrLiteral[5]); // logs the anonymous function
console.log(complexArrLiteral[3]);

let complexObjectLiteral = {num: 1, boolean: true, string: 'academy', arr: [1,2,3],
obj: {key: 'test'}, func: function(){return 'yes'}}
console.log(complexObjectLiteral.func);
console.log(complexObjectLiteral.arr);