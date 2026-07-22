// Conditionals:-

// if        (if and else is all about checking true and false logic)
let age = 18;

if (age >= 18) {                  //If it's true  output = Adult
    console.log("Adult");
}
// else
else {                            //If it's false  output = Minor
    console.log("Minor");
}

// else if       (Used when there are multiple possibilities.)
let score = 80;

if (score >= 90) {
    console.log("A");
}
else if (score >= 70) {
    console.log("B");
}
else if (score >= 60) {      //Important Rule:- JavaScript stops after first true condition but is only true for 'if, else if connected chain'...  (So even when this statement is true it won't run)
    console.log("C")         // Note:- If there are multiple 'If' instead of 'else if' JS checks every 'If' statement individually even after first 'if' is true it will continue till last 'if'.
}
else {
    console.log("D");
}


// switch    (used when comparing one value against many options... to avoid else if messy structure)
let day = 2;

switch(day) {
    case 1: 
        console.log("Monday");
        break;                        //break is very important since it tells JS to exactly where to stop and exit switch.

    case 2:
        console.log("Tuesday");
        break;

    case 3: 
        console.log("Wednesday");
        break;
}
//Output = Tuesday

//Example without break:-
let rank = 2;

switch(rank) {
    case 1:
        console.log("Crimson flow")

    case 2: 
        console.log("Radient flow")

    case 3: 
     console.log("Platenium flow")
}
//Output = Radient flow
//         Platenium flow              (since we didn't put break JS continues executing)    //This is called-- Fall-through

