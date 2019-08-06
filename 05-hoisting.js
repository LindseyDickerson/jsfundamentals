//Hoisting
// JS reads through code 2x. First looks for declarations (left side of code) 
// Second time it reads through assigns keywords to variable names. 
// console.log(scissors); -- ends up undefined
// need to define variable before referencing it
//functions get hoisted, variables do not
//Hoisting does not exist. It is an illusion. Code doesn't actually get moved. 
// JS reads through code twice remembering left hand side of variables and functions. 

scissors = 'blue';
console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log('this is all hoisted!');
}

var a = 'This is not hoisted';