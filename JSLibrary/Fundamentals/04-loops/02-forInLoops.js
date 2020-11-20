//good for working through objects and arrays
//each depend on something being true
//does not require the thing you loop be numbered 

let student = {name: 'Angie', awesome: true, degree: 'javascript', week: 1};

for(item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'shorthair', 'burmese', 'maine coon', 'rag doll'];
for(cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

//let's write a for in loop that capitalizes first letter of a name

let instructor = 'pAul';
let capName;
for(n in instructor){
    if(n==0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase()
    }
}
console.log(capName)