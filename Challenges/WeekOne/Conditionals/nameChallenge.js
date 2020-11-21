/* 
CHALLENGE 1
Who's name is longer?
BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
 */

// let me = "angie";
// let her = "elizabeth";
// console.log(me.length);
// console.log(her.length);

// if (her.length > me.length) {
//     console.log("My name is shorter than Elizabeth's.")
// }

// if (me.length < her.length) {
//     console.log("Elizabeth's name is longer than mine.")
// }

// if (her.length - me.length) {
//     console.log("Elizabeth's name is longer than mine by four letters.")
// }

//correct way:

let me = "angie";
let her = "elizabeth";
let sentence;

if (me.length > her.length) {
    sentence = "My name is longer than " + her;
    console.log(sentence);
} else if (me.length == her.length){
    const differenceInLetters = (her.length - me.length)
    sentence = `${her}'s name is longer than ${me}'s by ${differenceInLetters} letters.`
    console.log(sentence);
} 
else {
    const differenceInLetters = (her.length - me.length)
    sentence = `${her}'s name is longer than ${me}'s by ${differenceInLetters} letters.`
    console.log(sentence);
}