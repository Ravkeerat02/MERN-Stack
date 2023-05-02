/*
Create a script with a function named lowerCaseWords that takes a mixed array as input. 
The function will do the following.
return a promise that is resolved or rejected
filter the non-strings and lower case the remaining words
*/
const mixedArray =["PIZZA", 10, true, 25, false, "Wings","Chicken"]

const lowerCaseWords = (arr) =>
  new Promise((res, rej) => {
    if (!arr || arr.length === 0 || !Array.isArray(arr)) rej("Invalid input array");
    res(arr.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
  });

lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));