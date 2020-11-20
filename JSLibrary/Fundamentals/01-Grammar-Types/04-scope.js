/*
SCOPE

js has both local (in scope/function) and global scope
*/

// var x = 12; // global scope
// function scope(){
//     var x = 33;  // any variables you put in a function exist there only
//     console.log(x);
// }
// scope(); // logs 33
// console.log(x); // logs 12

// var x = 12;
// function scope(){
//     x = 33;
//     console.log(x);
// }
// scope()
// console.log(x);

//ex 3

// var x = 1;
// function scope(){
//     var x = 2; // logs second
//     function scope(){
//         var x = 3; // logs first- scope within scope
//         console.log(x);
//     }
//     scopeInner();
//     console.log(x);
// }
// scope();
// console.log(x); //logs last as the global scope; it's the only var available because it can't read in the scope

// x=1 is the global scope
// x=2 is the inner/local scope
// x=3 is a scope within a scope
// code reads top to bottom

var x = 12 // globally scoped
function scope(){
    var x = 33;
    if (true){
        let x = 45; // this gets run first- scope within scope
        console.log(x); 
    }
    console.log(x); // this logs 33 as the next "nested" scope
}
scope(); // refers to the function above, runs top to bottom
console.log(x);

var x = 12; // global scope
function scope(){
    x = 33;
    if (true){
        var x = 45; // logs first as 45
        console.log(x);
    }
    console.log(x) // gives 45, not 33 because 'var' doesn't obey block scope
}
scope();
console.log(x); // logs the global, 12