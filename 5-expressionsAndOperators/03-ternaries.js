//* a short version of an if/else statement



let number = 6;

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}

(number > 0) ? console.log(true) : console.log(false);



if (number == 0) {
    console.log('Number is 0');
} else if (number >= 5) {
    console.log('Number is bigger than 5');
} else if (number < 0) {
    console.log('Number is smaller than 0');
} else {
    console.log('Nope');
}

(number == 0) ? console.log('Number is 0') : (number >= 5) ? console.log
('Number is bigger than 5') : (number <= 0) ? console.log('Number is smaller than 0') 
: console.log('Nope');

let age = 30;
(age >= 25 && age <= 90) ? console.log('Yay! You can rent a car!')
 : (age >= 21) ? console.log('Yay! You can drink!')
 : (age >= 18) ? console.log('yay! you can vote!') 
 : (age <= 17) : console.log("Sorry, you're too young to do anything fun.");