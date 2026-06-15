// Input and Output

console.log("Hello");     //To print something on the browser console

alert("This is an alert");  //To throw an alert from browser

let name = prompt("Name?");  // Used to take input from users
console.log(name);

let result = confirm("Delete?");  // To check true or false for any statement  (ok means true, cancel means false)
if(result) {
    console.log("Your file is deleted")
}
else {
    console.log("Your File is not deleted")
}

//Note:- alert, prompt, confirm doesn't belong to console family like console.log, console.error, console.warn, console.table... console object is primarily used for debugging and displaying info. while alert, prompt, confirm is used for User purposes



// Strings:-

//String Concatenation
let a = "Ginger";
let b = "Petals"
console.log(a + b);


//Template Literals   **Important one

let c = "Ginger";
console.log(`Hello ${c}`);    //backticks defines the template literals without it ${} will not work. ${} only takes input when it's inside the backticks. The smart string.
//Template literals (` `) is like shortcut for string concatenation and it can also be used for math like ${5 + 5}...


//.length  to get the total number of characters in a string.

let d = "Ginger";
console.log(d.length);  //Note:- Spaces are also counted as the length of the string.


//.toUpperCase()  as name suggest it converts the string to uppercase

let e = "zoro";
console.log(e.toUpperCase);


//.toLowerCase()  converts the strings to lowercase

let f = "FUBUKI"
console.log(f.toLowerCase);

//Note:- Methods like these do not change the original string.
//Example:-
let g = "Ginger"
g.toUpperCase()
console.log(g);  //Output "Ginger"   because strings are immutable. or to simply say it when we use string methods it creats a new string, not change the existing string.


//.slice()
let h = "Ginger";
console.log(h.slice(0, 3));  //Output "Gin"  (0, 1, 2) = (G, i, n)
// slice returns the output based on starting index of the string and ending index of string. But end is not included the left one (3, 4, 5) = (g, e, r).
//Bonus example to note:-
let k = "BoaHancock";
console.log(k.slice(3));  //Output = Hancock. since we didn't gave the start and end index so now it takes the given index as start and prints till the last index.

//.substring()  //same as slice...


//.replace  (replaces text)
let msg = "Hello World";
console.log(msg.replace("World", "Ginger"));   // first write string which is gonna be replaced then write the string you want to place.


//.trim (Note:- Only removes spaces at edges start and end. Not in middle)
let i = "     Hello World      "
console.log(i.trim());  // Output  "Hello World"


//.includes()  //Checks if text exist or not
let j = "I love BoaHancock";
console.log(j.includes("Hancock"));   //Output true



