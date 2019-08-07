/***************
 * Return
************* */

let hi = () => {
    return 'hi';
    //*(1)
};

let newName = hi();
//*   (2)      (3)
console.log(newName);

// 1- The keyword that brings our data out of our function
// 2- We need a new variable to hold the value of the return
// 3- When called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';// '' is blank intentionally to fill in data later
    for (let letter in name) {
        if(letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name [letter].toLowerCase(); 
        }
    }
    return capName;
}
//      console.log(capName);
//line 29 - console.log(capName); results in error because not defined - need to see line 31
const myName = capitalizedName('liNdSey');
console.log(myName + ' How are you doing?');
//******************** */

//* Undefined is not an error! It is a data tyep, just not the one we want. 

///////Tip Calculator
let tipCalc = (price) => {
    let tipPercent = 0.20;
    let tip = price * tipPercent;
    return tip;
}
let tipDinner = tipCalc(100)
console.log(tipDinner);

//Alternate tip calculator

let tipCalc = (price) => {
    let tipPercent = .15;
    let tip = price * tipPercent;
    let finalAmount = tip + price;
    return finalAmount
}
let tipDinner = tipCalc(100);
console.log(`Your total bill is ${tipDinner}.`);
