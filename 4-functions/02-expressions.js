/********
 * 
 * Declaration functions get hoisted, expressions do not get hoisted.
 * 
 */

let hey = function hi(){
     console.log('HI!');
 }
 /****the variable 'hey' is now representative of the function 'hi()' */

 // anonymous function - doesn't have a name!

 let hi = function () {
     console.log('HEY!');
 }
 /*Functions won't run unless we tell it to (calling, or invoking them)