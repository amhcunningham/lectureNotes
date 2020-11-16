//IF ELSE

let weather = 75
if(weather<70) {
    console.log("Wear a jacket, ya heathen.");
} else {
    console.log("Ooh, nice!");
}

//you can blend complex conditionals and if-else statements based on need:

if(weather > 70 && typeof weather === "number") {
    console.log("This weather is aces.");
} else {
    console.log("Either the temp is cool, the variable is not a string, or both.");
}

//ELSE IF

//more complex than a light switch tool, can check for lots of conditions with a single block of code
//if/elseif statements can be chained

let age = 18;
if(age >= 25) {
    console.log("Here, have a rental car.");
} else if(age >= 21) {
    console.log("Here, have some booze.");
} else if(age >= 18) {
    console.log("Here, have a ballot.");
} else {
    console.log("Sorry, kid.")
}