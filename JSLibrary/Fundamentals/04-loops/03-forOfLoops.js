//for of requires that your 'thing' be iterable- meaning it needs to be numbered

// let student = {name: 'peter', isAwesome: true, degree: 'javascript', week: 1}
// for(item of student){
//     console.log(student);
// }

let catArray = ['tabby', 'shorthair', 'siamese', 'maine coon', 'sphynx']
for(cat of catArray){
    console.log(cat, 'says meow');
}