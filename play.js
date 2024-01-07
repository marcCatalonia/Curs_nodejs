const userName = 'Max';
const trialAge = 29;
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



console.log(summarizeUser(userName, trialAge, hasHobbies));

console.log(add(1, 2));

console.log("Add one " + addOne(1));

console.log("No arguments arroy function " + addRandom());




/* Objects properties and methods */
const person = {
    ownName : 'Max',
    ownAge : 29,
    greet(){
        console.log('Hi I am ' + this.ownName);
    }
};

person.greet();


/* Arrays */

const hobbies = ['hobbies', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby);
}

/* Map, a function to create a new array from another and modify its content if necessary */
console.log(hobbies.map(hobby => {
    return 'hobby: ' + hobby;
})); //equal to hobby => 'hobby: ' + hobby
console.log(hobbies);


//In an array inside a const variable we can modify its content because it saves the pointer (adress) where it is saved in memory
hobbies.push("programming");

console.log(hobbies);



/* Spread and Rest operators */

/* Spread operator */
const copiedArray = hobbies.slice();
console.log(copiedArray);

/* An alternative to that
const copiedSecondArray = [...hobbies]; //the ... pulls out the content to void nested arrays
console.log(copiedSecondArray);
*/


//Also to copy objects
const copyPerson = {...person};
console.log(copyPerson);


/* Rest operator */
const toArray = (...args) => {
    return args;
}

console.log(toArray(1, 2, 3, 4)); //[1, 2, 3, 4]




/* Object Destructuring */

/* We pass as a parameter inside de {} the name of the property we want of the object */
const printName = ({ownName}) =>{
    console.log(ownName);
}

printName(person);

//Object destructuring -> from the person object it gives the ownName and ownAge properties
const {ownName, ownAge} = person;

console.log(ownName, ownAge);


/* Can to the same for arrays */
const [hobby1, hobby2] = hobbies;
console.log(hobby1);




/* Promises */

const fetchData = () => {
    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Done!");
        }, 1500);
    });

    return promise;
}



setTimeout(() => {
    console.log("Timer is done!");
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);