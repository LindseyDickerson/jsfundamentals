
//block body
let hi = () => {
    //(1)  (2)
    console.log('hello!')
}

hi();
// -> NOT the same ast =>
//1- We need to set the fat arrow function to a variable
//2- We use the 'fat arrow' to signify its a function

// Consice Body
let hi = () => console.log('hi');

let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);
//More than one parameter will require parenthesis
//Return (if one-line fat arrow function) is implied

let apples = (x) => {
    console.log(`There are ${x} apples in the basket.`);
}
apples(10);

//line breaks on in js generally even between {}, but in fat arrow functions, line breaks do matter. 
//Setup needs to be on one line. 
/*
let func = () => console.log('hi'); //this works
let func = ()               
    => console.log('hi'); //this does not work
*/
