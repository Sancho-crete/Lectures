// Number and Math in js:-

//Math.round()  (round to nearest integer)
Math.round(4.4);  // 4
Math.round(4.5);  // 5
Math.round(4.9);  // 5

//Math.floor()  (always round down)
Math.floor(4.9);  // 4
Math.floor(4.1);  // 4

//Math.ceil()  (always round up)
Math.ceil(4.9);  // 5
Math.ceil(4.1);  // 5

//Math.random()  (Generates a random decimal number)
Math.random();  // 0.12345 or 0.65726 or 0.56612 and many more random possibilities.
//Note:- it gives >= 0 and <1  (Meaning-- 0 included but 1 never included).

//Example:- (Random Dice output)
console.log(Math.floor(Math.random()*6) + 1);  // 1, 2, 3, 4, 5, 6  possible outputs


//Math.max()  (returns the largest number)
Math.max(4, 7, 1, 6, 8, 2);  // 8

//Math.min()  (returns the smallest number)
Math.min(2, 8, 9, 1, 4, 3);  // 1

//Math.pow()  (Power/exponent)
Math.pow(2, 3);  // 2*2*2 = 8

//Math.sqrt()  (Square root)
Math.sqrt(25);  // 5