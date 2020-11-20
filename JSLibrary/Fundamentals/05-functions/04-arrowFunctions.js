//arrow functions

//normal function declaration
// function(coffee){
//     return 'coffee is life';
// }

//normal function expression- unnamed function
let tea = function(){
    return 'tea is also life';
}

//arrow functions are always anonymous/unnamed
//arrow function express
let hotChocolate = () => {
    return 'hot chocolate is okay'
}
console.log(hotChocolate())

let animals = (kittens, puppies) => {
    return `i have ${kittens} cat(s) and ${puppies} dog(s)`
}
console.log(animals(3,2))

//arrow functions are *not* hoisted

//concise vs block body
//concise body
let apples = x => `there are ${x} apples.`
console.log(apples(10))

//block body
let bananas = (x) => {
    return `there are ${x} bananas`
}

console.log(bananas(5))

//block body arrow functions must use the return