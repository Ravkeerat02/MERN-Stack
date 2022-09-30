// Student Name - Ravkeerat Singh 
// Student ID - 101344680

//EXERCISE 1 
console.log("*********EXEECISE 1 ****************")
function gretter(myArray, counter) {
    let greetText = 'Hello';
    myArray.forEach(function (value) {
        console.log(greetText + ' ' + value);
    });
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//EXERCISE 2  
console.log("*********EXEECISE 2 ****************");
// const capitalize = ([firstLetter, ...restOfWord]) => {
//     const capitalizedFirstLetter = firstLetter.toUpperCase();
//     const restOfWordString = restOfWord.join("");
//     return capitalizedFirstLetter + restOfWordString;
//   };
// console.log(capitalize("foobar"));
function capitalizeFirstLetter(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    console.log(splitStr.join(' '));
}
capitalizeFirstLetter('foobar');

// //EXERCISE 3 
// console.log("*********EXEECISE 3 ****************");
// const color = ['red','green','blue']
// const capitalizedColor = color.map(x=> x.charAt(0).toUpperCase() + x.slice(1));
// console.log(capitalizedColor);

// // Exercise 4
// console.log("*************EXERCISE 4************* ")
function filteredarray(number){
    let filteredarray = number.filter(function(value){
    return value <= 20;

} 
// var values = [10,15,20,20,25,6,100]
//     function filterLessThan20(numbersArray) {
    let filteredArray = numbersArray.filter(function (value) {
        return value >= 20;
    });
    console.log(filteredArray);
}

// //EXERCISE 5
// console.log("*************EXERCISE 5************* ")
// const array_num = [5,10,100]
// const num_sum = array_num.reduce((x,y) => x+y
// );
// const product_num = array_num.reduce((x,y) => x*y
// );
// console.log("*** Additon of array ***");
// console.log(num_sum);
// console.log("*** Multiplication of array ***");
// console.log(product_num)

// //EXERCISE 6 
// console.log("********** EXERCISE 6 ****************")
// class Car{
//     constructor(model,year) {
//         this.model = model;
//         this.year = year;

//     }
// }

// class Sedan extends Car{
//     constructor(model,year,balance){
//         super(balance);
//         this.balance = balance;
//         this.model = model;
//         this.year = year;
//     }
// }

// function getDetails(content){
//     console.log(content);
// }

// const example1 = new Car('Ford Gt',2018);
//     getDetails(example1);
// const example2 = new Sedan('Mcalren p1',2018,5000);
//     getDetails(example2);
// const example3 = new Sedan('Dodge Charger',2020,1500);
//     getDetails(example3);

