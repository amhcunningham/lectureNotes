/*
Comparison Operators
*/

//equality
console.log('3' == 3);
//data types are different, but the values match
console.log(4 == 4) 
console.log(3 == '4') 

//strict equality comparison
console.log(3 === 3)
console.log('3' === 3) // both the type and the value of the type must match to get a true result

//not equal comparison
console.log('3' != 4) // type and value are different
console.log('3' != 3)

//strict not equal
console.log('3' !== 3)
//cares about type AND value

//greater than, less than
console.log(3 >2);
console.log(3<2);

//greater than/equal to >=
//less than/equal to <=

/*Comparison Operators 
Equality Comparison Operator (==)
Strict Equality Comparison Operator (===)
=== vs ==
Not Equal Comparison Operator (!=)
Strict Not Equal Comparison Operator (!=)
Greater Than Operator (>)
Less Than Operator (<)
Greater Than or Equal To Operator (>=)
Less Than or Equal To Operator (<=)
Logical Operators 
And Comparison Operator (&&)
Or Comparison Operator (||)
Not Operator (!)
Conditionals
If Conditional
If elseConditional
Else if Conditional
*/

//And (both expressions on either side of the operator must be true for AND to return true)- think of it as nested logic

console.log(1<2 && 3>0);
//true on both sides- if one side is false, it will return a false result

//Or- only needs truth on one side of the operator to return true
console.log(1<2 || 3<0)


let obj = {key: "test"};
console.log(obj == {key: "test"});
//complex types- not comparing the contents, it's asking if the objects/types are exactly the same

console.log(obj == obj);

let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]) // false
console.log(arr == arr); //true

