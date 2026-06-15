// Operators in JS:-


// Arithmetic Operators:-

//Addition
console.log(2 + 5);  //7   //(Note: + also joins strings)
console.log("Hello" + "JavaScript");  //"Hello JavaScript"

//Subtraction
console.log(10 - 5);  //5

//Multiplication
console.log(5 * 5);  //25

//Division
console.log(20 / 5);  //4

//Modulus (Remainder)
console.log(10 % 3);  //1

//Exponent (Power)
console.log(2 ** 3);  //8


// Assignment Operators:-

//Basic assignment =
let age = 21;

//Add and assign +=
let a = 5;
a += 2;     //7

//Subtract and assign -=
let b = 10;
b -= 5;      //5

//Multiply and assign *=
let c = 10;
c *= 5;      //50


// Comparison Operators:- (returns true or false)

//Loose Equality ==  (Type Conversion allowed)
5 == "5"  //true

//Strict Equality ===  (Type Conversion not allowed)
5 === "5"  //false

//Not equal !=
5 != 2;  //true

//Strict not equal !==
5 !== "5";  //false

//Greater than
5 > 2;  //true

//Less than
5 < 10;  //true


// Logical Operators:-

// AND &&  (JavaScript doesn't returns true or false like other languages)
true && true  //true  //Note:- In JS this && Operator returns the first falsy value or the last value if all true.
true && false  //false
false && true  //false
false && false  //false
//Example---  
0 && 100;  //0
20 && 100;  //100

//OR ||  (JavaScript doesn't returns true or false like other languages)
true || true  //true  //Note:- In JS this || Operator returns the first truthy value or the last value if all false.
true || false  //true
false || true  //true
false || false  //false
//Example---
20 || 0;  //20
0 || null  //null

//NOT !
!true  //false
!false  //true


// Unary Operators:-

//Increment ++
let d = 5;
d++;        //6

//Decrement --
let e = 5;
e--;        //4


// Ternary Operators:-
//Short version of if-else.
//condition ? trueValue : falseValue
let size = 20;
let result = size >= 18 ? "Big" : "Small";  //Big


//Nullish Coalescing ??
console.log(null ?? "Ginger");  //Ginger
// Returns right side only if left side is either "null" or "undefined"


// **Important concept:-
let x = 5;
console.log(x++);  //This will return 5. Since x++ returns the old value 5 while updating the value of x to 6.

let y = 5
y++;
console.log(y);  //This will return 6. Because this time we asked for the value of "y" not "y++" and value of y = 6 (after increment). And since returning value (5) of y++ is not used it will be ignored.

