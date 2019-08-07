/****
 * Calling functions
 */

 function hi() {
     console.log('HI!');
 }

 hi();
 //This is how we call, or invoke our function. It is the start button on a machine!
 console.log(hi());
 /* create a function that, when invoked, lists out the numbers 1-10
 */

 function list() {
    for(let i = 1; i <= 10; i++) {
      console.log(i);
    }
 }
 list();
 /****** */

 let arr = ['This', 'is', 'really', 'cool'];
 function arrList() {

    for (word of arr) {
        console.log(word)
    }
 }
 arrList();