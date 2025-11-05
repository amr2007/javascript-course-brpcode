// Logical oprators = used to combine or menipulate boolean values 
//                      (true or false)

//          AND = && here both condition must have to be true if we want true as result 
//          OR = || here one codition must have to be true in order to get true in result 
//          NOT = ! Convert true -> false and false -> true

// const temp = -200;

// if(temp > 0 && temp <= 30){
//     console.log("Weather is GOOD");
// }
// else{
//     console.log("Weather is BAD")
// }

// if(temp <= 0 || temp > 30){
//     console.log("Weather is BAD");
// }
// else{
//     console.log("Weather is GOOD")
// }

const isSunny = false;

if(!isSunny){
    console.log("It is CLOUDY");
}

else{
    console.log("It is SUNNY")
}