//SWITCH STMTS

let friend = "Casey";
switch(friend) {
    case "Tom":
        console.log("Hey Tom.");
        break;
    case "Ken":
        console.log("Hey Ken.");
        break;
    case "Alex":
        console.log("Hey Alex.");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}

//without the breaks, all the code gets run

let yep = true;
switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('Yep is a string or boolean.')
        break;
    default:
        console.log('Nope.');
}

//not a great option, can be inelegant 