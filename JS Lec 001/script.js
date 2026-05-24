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
let name = "Hancock";
// variable value can be changed later...
name = "Nico Robin";
console.log(name);

//const
const pi = 3.14;
// variable value won't change and throws error...
pi = 24;
console.log(pi);

//var
var phase = "first";
// old way of declaring variables. mostly avoided in modern JS. Var behaves differently with Scope and Hoisting... 



// JS is case-sensitive. 
let name = "a";
let Name = "b";
let NAME = "c";
// These all are different variables since as mentioned JS is a case-sensitive language.

