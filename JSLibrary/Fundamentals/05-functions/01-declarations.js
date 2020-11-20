//stop kicking your own ass, angie. this takes time.

//general ideas- at their broadest level, functions do the following:
//take some input which the function will handle/process
//they process the input given
//they *USUALLY* return some value
//they can be invoked as many times as we want, cuts down on code repetition

function newFunc(num){
    return num + 1;
}
newFunc(7);
console.log(newFunc(7));
newFunc(10);
newFunc(11);
newFunc(12);
newFunc(-2)

//cleans up the code
//NUM is the input
//it's given process is to take a num and add 1
//it's returning the result of the process
//we can call it/invoke it as many times as we want

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}.`;
}
console.log(sentence('Tony', 'Stark'));
console.log(sentence('Bruce', 'Banner'));

let superImportantSentence = sentence('Scott', 'Lang');
console.log(superImportantSentence);

let arr = [1, true, {key: 'string'}, [0, false, null], 'yoyo'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);

//iteratorFunc doesn't return anything- it's a side effect because it logs everything in the array
//just means there's an alternative action