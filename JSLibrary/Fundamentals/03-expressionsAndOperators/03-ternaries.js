// TERNARIES

//sleek and elegant way to do logic; much less messy

let x = 6;
x > 0 ? console.log("X is positive.") : console.log("X is negative.");

//run as an if else?
if(x>0){
    console.log("X is positive.");
} else {
    console.log("X is negative.");
}

let greeting = "Salutations.";
if(greeting.length > 10){
    console.log("That is a long-ass greeting.");
} else if (greeting.length == 10){
    console.log("Your greeting is longer than 10 letters.");
} else {
    console.log("Yay, a normal greeting.")
}

greeting.length > 10 ? console.log("That is a long greeting.") :
greeting.length == 10 ? console.log("Your greeting blahblah.") :
console.log("More blahs.")