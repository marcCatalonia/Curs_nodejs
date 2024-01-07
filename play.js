const userName = 'Max';
const age = 29;
const hasHobbies = true;


/* Anonymous function */
const summarizeUser = function(userName, userAge, userHobby){

    return (
        'Name is' +
        userName +
        ' age is '+
        userAge +
        ' and the user has hobbies ' +
        userHobby
    );

}

/* 2 - Can convert the anonymous function in to an arrow function*/
/* summarizeUser = (userName, userAge, userHobby) => {

    //With this arrow function we can use the 'this' keyword to acces function properties
    return (
        'Name is' +
        userName +
        ' age is '+
        userAge +
        ' and the user has hobbies ' +
        userHobby
    );
} */


/* 3 - Shorter version of arrow function

we ommit the return inside the function
*/

const add = (a, b) => a + b;



/* 4 - AN arrow function with just one argument and without parentesis */

const addOne = a => a + 1;



/* 5 - Arrow function with no arguments. Put parenetesis empty and then the body  */

const addRandom = () => 1 + 2;



console.log(summarizeUser(userName, age, hasHobbies));

console.log(add(1, 2));

console.log("Add one " + addOne(1));

console.log("No arguments arroy function " + addRandom());