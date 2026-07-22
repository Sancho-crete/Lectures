// Loops in JS

// for 
for (let i = 1; i <= 100; i++) {
    console.log("Hello");
}                                             // Hello will print 100 separate times.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// for loop-- run the loop for the condition. exactly till a point.
// Memory tip for for loop-- Use it when you know exactly the number of times code should run.
// EXample-- walk 100 steps.
for (let step = 1; step <= 100; step++) {
    console.log("Walking step: ", step);
}                                                  // Walk exactly 100 steps.



//while
let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}

// Basically for and while loop does the same thing but we use both accordingly for better Code understanding.
// Memory tip for while loop-- Use it when you only know the stopping condition.
// Example-- walk until you reach the river.
let distanceToRiver = 10;
while (distanceToRiver > 0) {
    console.log("Walking...");
    distanceToRiver--;
}
console.log("Reached the River!");                 // keep walking while river not reached.




// do while  (runs the code first then checks the condition which makes the code run at least for once.)
let choice = "Exit";
do {
    console.log("Menu");
}
while (choice !== "Exit");

