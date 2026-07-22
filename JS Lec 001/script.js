console.log('hello js')
console.warn('This is warning')
console.error('This is Error')
console.table(['Robin', 'Hancock', 'Fubuki', 'Raiden', 'Arlecchino'])


// Variables in JS

//Declaration:-
let age;

//Initialization:-
age = 18;
console.log(age);

//Both Declaration and Initialization together :-
let year = 2020;
console.log(year);



// There are three keywords of variable in JS:-

//let
let character = "Hancock";
// variable value can be changed later...
character = "Nico Robin";
console.log(character);

//const
const pi = 3.14;  //Const must be declared and initialized together.
// since variable value won't change and throws error...

//var
var phase = "first";
// old way of declaring variables. mostly avoided in modern JS. Var behaves differently with Scope and Hoisting... 



// JS is case-sensitive. 
let name = "a";
let Name = "b";
let NAME = "c";
// These all are different variables since as mentioned JS is a case-sensitive language.

//var is not a block scope variable which is known as Global scope. Entire Window is the Global Scope. EX-
{
var ab = "HEllo";
}
console.log(ab); //we can access var even outside the block.

//let and const is a block scoped variable since we can't access let and const outside the block. It will throw error. EX-
{
    let bc = "kaise ho";
    const cd = "Thik ba";

    console.log(bc);
    console.log(cd);
}

console.log(window);