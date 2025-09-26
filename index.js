// // const = A variable that can't changed...
// // finding circumference with let 
// // let pi = 3.14159;
// // let redius;
// // let circumference;
// // pi = 420.69

// // redius = window.prompt("Enter the radius of a circle");
// // redius = Number(redius);
// // // changing the value of pi
// // // let can be changed and that's why we use const for constant value like pi and Gravity
// // circumference = 2 * pi * redius;

// // console.log(circumference);

// // now using const
const PI = 3.14159;
let redius;
let circumference;


// // changing the value of pi
// // pi = 420.69
// // let can be changed and that's why we use const for constant value like pi and Gravity

document.getElementById("mySubmit").onclick = function(){
    redius = document.getElementById("myText").value;
    redius = Number(redius);
    circumference = 2 * PI * redius;
    document.getElementById("myH3").textContent = circumference + ' cm';

}