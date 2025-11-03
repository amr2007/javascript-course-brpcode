// SWITCH = can be efficient replacement to many else if statement 

// let day = 4;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//         // why to add break after each case because if we dont it can run all the case below of it so we need to exit once day is similer to day variable if day variable is not matching it can run the default case 
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wensday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saterday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     // default case if any case don't match 
//     default:
//         console.log(`${day} is not a Day`)
// }

let testScore = 89;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);