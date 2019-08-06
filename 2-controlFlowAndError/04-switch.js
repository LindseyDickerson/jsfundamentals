/********
 * ? Switch
 * ***************
 */

 let friend = 'Lindsey';

 switch (friend) {
     case 'Autumn':
         console.log("Hey Autumn, when are we going rock wall climging?");
        break;
    case 'Dave':
        console.log('Hey Dave, how is Cooper?');
        break;
    case 'Alecx':
        console.log('Hey Alecx, when are we playing DnD?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`)
        console.log('I\'m sorry,',friend,', but do I know you?');
 }

 //* String interpolation - top console log in default

 let dessert = 'pie';
 switch (dessert) {
     case ('Pie' || 'pie'):
     console.log('Pie, pie, me oh my!');
     break;
    case 'Cake':
    console.log('Cake is great!');
     break;
    case 'Ice Cream':
    console.log('I scream for ice cream!');
     break;
    default: 
    console.log(`Not on the menu.`);
 }

 let age = 22;
switch (true) {
    case (age >= 25):
        console.log('Yay! You can rent a car!');
        break;
    case (age >= 21):
        console.log('Yay! You can drink!');
        break;
    case (age >= 18):
        console.log('Yay! You can vote!');
        break;
    case (age <= 17):
        console.log('Boring')
        break;
    default:
        console.log('Not a number bro');
}