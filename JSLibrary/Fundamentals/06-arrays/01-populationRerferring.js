// // arrays
// //an array uses square brackets, can hold multiple data types in an ordered way 0-etc

// let students = ['tony', 'marshall', 'reese', 'ray', 23, true, ['ryan', 'iesha']];
// // console.log(typeof students);
// // console.log(students instanceof Array);

// //typeof doesn't say if the variable is an array
// //instance of says the array is an array

// console.log(students[2]);

// let name = students[6][1];

// //for-of loop

let food = ['kettle corn', 'miso ramen', 'avocado toast', 'cheesecake', 'grilled cheese'];
// for (f of food){
// //     console.log(f +' is tasty as fuck.');
// // }

// // // ^ this gives the value of the arrays
// // // can use string concantenation
// // // console logging isn't the only thing you can do with loops!

// // //array methods
// // //feel like you're spinning your wheels? that's noraml. breathe, relax. you're doing great, kid. FIND ARRAY METHODS ON THE MDN DOCS!

// // food.push('pizza'); 
// // console.log(food);

// // //push lets you add stuff to an existing array
// // //splice takes 3 arguments: insertion point, how many things to remove, and what to add
// // food.splice(1, 1, 'bananas');
// // console.log(food);

// // food.pop();
// // //removes the last element of an array

// // food = food.slice(2,5); // first number is the first item/element to slice from, the second number is where the slice should stop (last item is not included)
// // console.log(food);

// //forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

food.forEach((f) => console.log(f));
food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

// let movies = ['star wars', 'hello dolly', '9', 'my cousin vinny', 'meet me in st. louis'];
// movies.push('thor: ragnarok');
// console.log(movies);
// movies.splice(3,1,'blank panther');
// console.log(movies);
// movies.forEach(movie => console.log(movie));
// console.log(movies.length);

// //let's try this:
// //we'll check if we're working with an array, and then flip the values in the array
// //using method only, print the values of the newly arranged array

// let arr = new Array(1,2,3,4,5);
// console.log(arr, arr instanceof Array);

// if (arr instanceof Array){
//     let revArr = arr.reverse();
//     revArr.forEach(numbers => console.log(numbers));
// }