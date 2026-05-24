
//Data Types:-
//JS has 2 big categories: Primitive Data Types, Non-Primitive Data Types...


//Primitive Data Types: (single/simple values):-

let name = "Ginger"; //String
let follow = true; //Boolean (true or false)
let box; //Undefined (No value assigned)
let fill = null; //Null (deliberately keeping it empty to assign value later)
let big = 142635837n; //BigInt (normal numbers have a limit in JS so we use BigInt... notice 'n' in the end of the number that 'n' tells us that it's a BigInt)
let id = Symbol(); //Symbol (Rare advanced primitive type used to create unique values)

//Non-Primitive Data Types: (Bigger and more complex):-

//Object
let user = {
    name: "ginger",
    age: 20
};
console.log(user);

//Array
let colors = ["red", "green", "blue"]; 

//Functions
function greet() {
    console.log("Hello");
}
greet();    //Making our own reusable functions so that we don't have to write every logic again and again. Or to say it simply-- so that we can avoid repeating the code.


//typeof Operator  (used to check data types):-
let a = "Zoro";
console.log(typeof a);

let b = 20;
console.log(typeof b);

let c = true;
console.log(typeof c);

let d = 2.56;
console.log(typeof d);

let e = 527356n;
console.log(typeof e);

let f = {name: "Hancock", color: "purple"};
console.log(typeof f);

let g = ["Boa Hancock", 'Nico Robin', "Shirahoshi"];
console.log(typeof g);    //This is the catch. JS treats arrays as objects so it will also return as object.

function Nami() {
    console.log("Nami");
}
console.log(typeof Nami);


//JavaScript later aaded a special method to check arrays properly:-
let i = ["Hancock", "Robin", "Shirahoshi"];
console.log(Array.isArray(i));  //Answer will be in true/false since it's a boolean way of checking the particular data type.