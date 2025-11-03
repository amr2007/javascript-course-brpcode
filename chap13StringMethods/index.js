// String methods = Allow you to menipulate and work with text (String)

let userName = "BroCode";

// charAt give us the latter when we enter the index of that latter 
// console.log(userName.charAt(0));
// indexOf will give the index of latter what we enter
// console.log(userName.indexOf("o"));
// lastIndexOf is for getting the index of a latter that we enter 
// console.log(userName.lastIndexOf("o"));
// .length to get the length of string 
// console.log(userName.length);
// .trim to remove any blank spaces in string 
// console.log(userName.trim())
// to turn the strings each char into upper case
// console.log(userName.toUpperCase())
// to turn the string into lower case
// console.log(userName.toLowerCase())
// .repeat to repeat the string how many time as we want
// console.log(userName.repeat(3));
// .startWith used to check if string is starting with some latter or blank space it will give bullion value
// console.log(userName.startsWith("B"));
// to check if string ends with a char or blank space
// console.log(userName.endsWith("e"));
// console.log(userName.includes(" "))
// .includes to check if it have the latter that we are finding or not means it includes the char we are finding or not
let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.replaceAll("-" , "/")
// phoneNumber = phoneNumber.padStart(20 , "0");
// .pad method will add the number we give to get it to the goal of char we give
phoneNumber = phoneNumber.padEnd(20 , "0");
console.log(phoneNumber)