/*****
 * Parameters
 */

  function hi(name) {
            //(1)
    console.log(`Hi ${name}!`)
                      //(2)
  }

  hi(`Danielle`);
  /***** */
  hi(`Zach`);
     //(3)

     //1- The parameter(s) we need to take into the function
     //2- using string interpolation, we can refer to the parameter we passed
     //3- This is where we define what the parameter's value will be
function pet(animal) {
    console.log(`My puppy's name is ${animal}!`)//* ${} - uses string inerpolation *//
}

pet('Mo');
pet('Georgie');
pet('Nugget');

//********** */

function person(fName, lName) {
    let wName = fName + ' ' + lName;
    console.log(`Hello, my name is ${wName}!`)
}
person('Lindsey', 'Dickerson');
