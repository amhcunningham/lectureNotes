//LOOPS

//allows for repeat code for x-number of times
//functions allow for repeat on-demand

/*
Loops offer a quick and easy way to do something repeatedly

there are many kinds of loops but they all do roughly the same thing
    for statement
    do while
    while
    labeled
    break
    continue
    for in
    for of
    .forEach (arrays only)
    .map (arrays only)
*/

//loop structure: 1)creation of indexing variable 2)run condition 3)change to indexing variable

//count to 10 from 0 and log numbers:
for(let i = 0; i <= 10; i++){
    console.log(i);
}

//loops can run infinitely
// for(let i = 0; ; i++){           it's an infinite loop!
//     console.log(i);                     it's a bug!
// }

//counts to -25 by -3 starting from 2, logs the nubmers
for(let i = 2; i >=-25; i = i - 3){
    console.log(i);
}

//display letters in a name individually
let name = 'Kincade';
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()*30)
let increment = 3;

for (let i = start; i <= stop; i = i +increment){
    console.log(i);
}