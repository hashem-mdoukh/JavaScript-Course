// console.log("%cElzero %cWeb %cScholl","color:red; font-size:40px;", "color:green; font-weight: bold; font-size:40px;", "color: white; background-color:blue; font-size:40px;")
// console.error("Elzero Web Scholl")
// console.table(["hashem","ahmed","mahoumd","hussein","farse"])

// ----------------intro in JavaScript

// console.log("hashem \\web \"school\"");

// console.log("hashem \
// web \
// school");

// console.log("hashem\nweb\nschool")

// let a = "we love"
// let b ="javascript"
// let c ="and"
// let d = "programming"

// console.log(a +" "+ b +
// "\n"+ c +
// "\n"+ d)

// console.log(`${a} ${b}
// ${c} ${d}`)

// ------------------console Group In Js

// console.group("group 1")
// console.log("message one")
// console.log("message two")
// console.group("Child group")
// console.log("message one")
// console.log("message two")
// console.group("Grand Child group")
// console.log("message one")
// console.log("message two")
// console.groupEnd();
// console.group("group 2")
// console.log("message one")
// console.log("message two")
// console.groupEnd();

// --------------------Data Of Type IN Js

// console.log("hashem madoukh")
// console.log(typeof "hashem madoukh")
// console.log(typeof 5000)
// console.log(typeof [10,15,17])
// console.log(typeof {name: 'hashem', age: 25, country: "gaza"})
// console.log(typeof true)
// console.log(typeof {name: 'hashem', age: 25, country: "gaza"})
// console.log(typeof true)
// console.log(typeof false)
// console.log(typeof undefined)
// console.log(typeof null)

// --------------------Variable In Js

// var NumberOne = 10;
// var NumberTwo = 20;

// console.log(1020)
// console.log("NumberOneNumberTwo")
// console.log(`${NumberOne}${NumberTwo}`)
// console.log(`NumberoneNumberTwo`)
// console.log("20\n10")
// console.log(`${"20"}
// ${"10"}`)

// console.log(elzero.innerHTML);
// console.log(typeof elzero);

// let The_Title = "Hello Elzero", ADescription = "Elzero Web School", At_Date = "25/10"

// let markup = `
// <div calss="card">
//  <h3>${The_Title}</h3>
//  <p>${ADescription}</p>
//  <span>${At_Date}</span>
// </div>
// `;

// document.write(markup);
// document.write(`${markup.repeat(3)}`);

// console.log(10 +20)
// console.log(10 + "hashem")

// console.log(10 -20)
// console.log(10 - "hashem")

// console.log(10 *20)
// console.log(10 * -20)

// console.log(20 /5)
// console.log( 20 / 6 )

// console.log(2 ** 4)
// console.log( 2*2*2*2)

// console.log(10 % 20 % 15 % 3 % 190 % 10 /  400)

// ------------------Number In Js And Method

let num = 3;

console.log(Number(num) + Number(num));
console.log(num + num);
console.log(+true * num + +true * num);
console.log(num ** 2 - num);

// let d ="-100"
// let e = "20"

console.log(-"-100" * "20");

console.log(100_000);
console.log(1e5);
console.log(5e4 + 5e4);
console.log(10 ** 5);
console.log(10 * 10 * 10 * 10 * 10);
console.log(100000.0);
console.log(Number(100000));
console.log(1_00_000);
console.log(3e4 + 7e4);
console.log(2e4 * 5);
console.log(1e6 - 9e5);
console.log(100000);
console.log(3e2 ** 2 + 1e4);

let myVar = "100.56789 Views";
console.log(parseInt(myVar));
console.log(parseFloat(myVar));

let flt = 10.4;

console.log(Math.round(flt));
console.log(Math.floor(flt));
console.log(Math.trunc(flt));

//----------------- String And Method

// let theName = "  Ahmed  "
// console.log(theName)
// console.log(theName.length)
// console.log(theName[2])

// console.log(theName.charAt(2))
// console.log(theName.trim())

// console.log(theName.toUpperCase())

// console.log(theName.toLowerCase())
// console.log(theName.trim().charAt(2).toUpperCase())

// let a = "Elzero Web School"

// console.log(a.indexOf("Web"))
// console.log(a.indexOf("Web",8))

// console.log(a.indexOf("o"))
// console.log(a.lastIndexOf("o"))

// console.log(a.slice(0,8))
// console.log(a.slice(2,7))
// console.log(a.split(" "))

// console.log(a.substring(2,6))
// console.log(a.substring(6,2))

// console.log(a.length)
// console.log(a.substring(a.length - 5, a.length - 3))
// console.log(a.substr(-5 , 2))

// console.log(a.substr(0, 6))

// console.log(a.includes("Web"))

let userName = "Elzero";

console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.slice(-6, -5).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase());
console.log(
  userName.substring(userName.length - 6, userName.length - 5).toLowerCase()
);
console.log(userName[0].repeat(3).toLowerCase());

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.toUpperCase().includes("Z"))
// console.log(word.toUpperCase().startsWith("E"))
// console.log(letterO.toLowerCase().endsWith("o"))

// ---------------Operator In Js

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(! -50 != +"-40"); // true
// console.log(! 10 != -"-40"); // true
// console.log(! "10" != 10); // true
// console.log(! 20 == false); // true

// console.log(10 == "10" && 50 > 10 || 10 > 20)

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2)
// console.log(num1 !== num2)
// console.log(typeof num1 == typeof num2)
// console.log(num1 <= num2)
// console.log(!(num1 == num2))
// console.log(num1 < num2 && num1 !== num2)

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a == b); // true
// console.log(a != b && a > c); // true
// console.log(!(a > b) && !(a == b) && !(a < c) && !(a === c)); // true

// -------------------------if (condition)

// let price = 100
// let discount = false
// let discountAmount = 30
// let country = "Gaza"
// let student = true

// if(discount === true){

//     price -= discountAmount

// } else if(country === "Gaza") {

//     if(student === true) {

//         price -= discountAmount + 30

//     }else {
//         price -= discountAmount + 10
//     }

// } else if(country === "syria"){

//     price -= 50

// }else {

//     price -= 10

// }

// console.log(price)

// let sumMarkes = 95

// if (sumMarkes >= 90 && sumMarkes < 100) {
//     console.log("excellent");
// } else if (sumMarkes >= 80 && sumMarkes < 90) {
//     console.log("Very Good");
// } else if (sumMarkes >= 70  && sumMarkes < 60) {
//     console.log("Good");
// } else if (sumMarkes >= 50) {
//     console.log("acceptable");
// } else {
//     console.log("fail");
// }

// let yourAge = prompt("Whats Your Age")

// if (yourAge < 18 ) {
//     document.getElementById("test").innerHTML =
//     "Sorry Your Age Is " + yourAge + "You Are Not Allowed Here";

// } else {
//     document.getElementById("test").innerHTML =
//    "Hello Your Age Is " + yourAge + "You Are Wellcome Here";
// }

// var num = 9;

// if (num > 10) {
//     console.log(`"The Number ${num} Is Larger Than 10"`)
// }else {
//     console.log(`0${num}`)
// }

// --------------------Conditional (Ternary) Operator

// let theName = "Ahmed"
// let theGender = "Male"
// let theAge = 30

// if (theGender === "Male"){
//     console.log("Mr")
// } else {
//     console.log("Mrs")
// }

// condition ? If True : If False

// theGender === "Male" ? console.log("Mr") : console.log("Mrs")

// let result =  theGender === "Male" ? "Mr" : "Mrs"

// document.write(result)

// console.log(theGender === "Male" ? "Mr" : "Mrs")

// console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"}.${theName}`)

// theAge < 20 ? console.log(20) : theAge >20 && theAge < 60 ? console.log("20 TO 60") : theAge > 60 ? console.log("Laeger Than 60")  : console.log("UnKnown")

// Nullish Coalescing Operator And Logical Or

// Logical Or

// Null + Undefined + any Falsy Value

// Nullish Coalescing Operator

// Null + Undefined

// let price = 0;

// console.log(`The Price Is ${price || 200}`)
// console.log(`The Price Is ${price ?? 200}`)

// Assignment Number One

// let numOne = 9
// let numTwo = 20
// let numThree = 110

// if ( !(numOne < 10) ) {
//     console.log(`00${numOne}`)

// } else if (!(numTwo > 10) && !(numTwo < 100) ) {
//     console.log(`0${numTwo}`);
// } else {
//     console.log(numThree);
// }

// Assignment Number Two

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if ( !(num1 == str) ) {
//     console.log(`"${num1} Is The Same Value As ${str}"`)
// } else if ( !( num1 === str) ) {
//     console.log(`"${num1} Is The Same Value As ${str} But Not The Same Type"`)
// } else if ( !( num1 === str2) ) {
//     console.log(`"{num1} Is Not The Same Value Or The Same Type As {str2}"`);
// } else {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }

// Assignmnrt Number Four

// let num1 = 10;
// let num2 = 9;
// let num3 = 10;
// let num4 = 21;

// if (num1 > num2) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if (num1 > num2 && num1 < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if (num1 > num2 && num1 === num3) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if ((num1 + num2) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if ((num1 + num3) < num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if ((num1 + num2 + num3) > num4) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// if (num4 - (num1 + num3) + num2 === 21) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// ----------------------switch Statement

// let day = 4

// switch(day) {
//     case 0:
//         console.log("Saturday")
//         break;
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     case 3:
//     case 4:
//         console.log("Thusday")
//         break;
//     default:
//     console.log("Unknown Day")
// }

// ----------------------------Arrays

// let myFriends = ["Mohmmed","Mahmoud","Hussein", ["Fares", "Ashraf"]]

// console.log(`Hello ${myFriends[0]}`)

// console.log(`Hello ${myFriends[2]}`)

// console.log(`Hello ${myFriends[1][2]}`)
// console.log(`Hello ${myFriends[2][4]}`)

// console.log(`Hello ${myFriends[3][0][1]}`)

// console.log(myFriends)
// myFriends[1] = "sayed"

// console.log(myFriends)
// myFriends[3] = ["Samesh", "Ameer"]

// console.log(myFriends)
// myFriends[3] ="Ameer"
// console.log(myFriends)

// console.log(typeof(myFriends))
// console.log(Array.isArray(myFriends))

// Arrays Methods
// length

// let myFriends = ["Mohmmed","Mahmoud","Hussein", "Alaa","Mohmmed"]

// console.log(myFriends.length)

// myFriends[myFriends.length] = "Gamal"
// console.log(myFriends)

// myFriends.unshift("Osama", "Fares")

// console.log(myFriends)

// myFriends.push("Gali", "Hosma")

// console.log(myFriends)

// let First = myFriends.shift()

// console.log(myFriends)
// console.log(`The First Name Is ${First}`)

// let last = myFriends.pop()

// console.log(myFriends)
// console.log(`The Last Name Is ${last}`)

// console.log(myFriends.indexOf("Mohmmed"))
// console.log(myFriends.indexOf("Mohmmed",2))

// console.log(myFriends.lastIndexOf("Mohmmed"))
// console.log(myFriends.lastIndexOf("Mohmmed",-2))

// console.log(myFriends.includes("Mohmmed"))
// console.log(myFriends.includes("Mohmmed",2))

// if(myFriends.indexOf("Osmam") === -1){
//     console.log("Not Found")
// }

// console.log(myFriends.indexOf("Osmam"))
// console.log(myFriends.lastIndexOf("Osmam"))

// let myFriends = [10, "Sayed", "Mohammed", "90",9000, 100, 20, "10", -20, -10]

// console.log(myFriends)
// console.log(myFriends.sort().reverse())

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
//  let num = 3;

// console.log(myFriends.slice(0,3)); // ["Ahmed", "Elham", "Osama"];

// console.log(myFriends.slice(0, -1))

// let last = myFriends.pop()

// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// console.log(myFriends.slice(-4))

// myFriends.splice(0, 0, "Sameer", "Ali")
// console.log(myFriends)

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// console.log(friends)

// let Lastend = friends.pop()

// friends.splice(0,1)
// console.log(friends); // ["Eman", "Osama"]

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = arrOne.concat(arrTwo);

// console.log(finalArr.join());

// console.log(finalArr.sort().reverse());

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[2][0].slice(2).toUpperCase()); // ZERO

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// if(haystack.includes("JS") !== -1){
//     console.log("Found")
// }

// if(haystack.indexOf("JS") !== -1){
//     console.log("Found")
// }

// if(haystack.lastIndexOf("JS") !== -1){
//     console.log("Found")
// }

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = arr1.concat(arr2)

// console.log(allArrs.sort().slice(-3))

// --------loop------------------For

// for (let i = 0; i<10; i++) {
//     console.log(i)
// }

// let myFriends = [1, 2, "Osama", "Ahmed", "Sayed", 3, 4, "Ali", 6, "Amira"]

// let onlyNames = []

// for (let i = 0; i < myFriends.length; i++) {
//     if (typeof myFriends[i] === "string") {
//         onlyNames.push(myFriends[i])
//     }

// }

// console.log(onlyNames)

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i])
// }

// let porducts = ["Keyboard", "Mouse", "Pen", "Pad", "Momitor"]
// let colors = ["Red", "Green", "Black"]
// let Models = [2020, 2021]

// for (let i = 0; i < porducts.length; i++){
//     console.log(`#---${porducts[i]}---#`)

//     console.log("Colors :  ")
//     for (let j = 0; j < colors.length; j++){
//         console.log(`- ${colors[j]}`)
//     }

//     console.log("Models :  ")
//     for (let k = 0; k < Models.length; k++){
//         console.log(`- ${Models[k]}`)
//     }
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Momitor"]
// let colors = ["Red", "Green", "Black"]

// mainloop: for (let i = 0; i < products.length; i++) {

//     console.log(products[i])
//     nestedloop: for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`)
//         if(colors[j] === "Green") {
//             break nestedloop;
//         }
//     }
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Momitor", "iphone"]
// let i = 0

// for (;;) {
//     console.log(products[i])
//     i++
//     if (i === products.length) break;

// }

// Assignments Number One To For ----------- loop

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i+= start) {
//     if ( i == exclude ) {
//         continue;
//     }
//     console.log(i)
// }

// Assignments Number Two To For ----------- loop

// let start = 10;
// let end = 0;
// let stop = 3;

// for (let i = start; i > end; i--) {

//     if ( i <= stop ) {
//         break;
//     }

//     if ( i < start) {
//         console.log(`0${i}`)
//     }
//     else
//     console.log(`${i}`)

// }

// Assignments Number Four To For ----------- loop

// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {

//     if (index <= jump) break;
//     console.log(index)
//     index-=jump
// }

// Assignments Number Five To For ----------- loop

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let count = 1
// for (let i = 0; i < friends.length; i++) {
//     if (!friends[i].startsWith(letter.toUpperCase())) {
//         console.log(`${count} => ${friends[i]}`)
//         count++
//     }
// }

// Assignments Number Six To For ----------- loop

// let start = 0;
// let swappedName = "elZerO";
// let str = '';

// for (start; start < swappedName.length; start++) {
//     if (swappedName[start] === swappedName[start].toLowerCase()) {
//         str += swappedName[start].toUpperCase()
//     }
//     else {
//         str += swappedName[start].toLowerCase()
//     }
// }

// console.log(str);

// Assignments Number Seven To For ----------- loop

// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++  ) {

//     if(!(typeof mix[i] === "string") && !(i === 0)) {
//         console.log(mix[i])
//     }
// }

// -----------loop------------------while

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Momitor", "iphone"]

// let index = 0

// while (index < products.length) {
//     console.log(products[index])

//     index++
// }

// Assignments To For ----------- While

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (counter < friends.length) {

//     if(!(typeof friends[counter] === "number")){
//         if (!(friends[counter].toLowerCase().startsWith("a"))) {
//             index++
//             console.log(`${index} => ${friends[counter]}`)
//         }
//     }
//     counter++
// }

// ------loop--------------------do while

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Momitor", "iphone"]

// let i = 0

// do {
//     console.log(i)
//     i++
// } while (false)

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// Challenges String Manipulation

// let a = "Elzero Web School";
// let b = a.slice(0,6)
// let Array1 = [b]

// console.log(`${a.charAt(2).toUpperCase()}${a.slice(3,6)}`); // Zero

// console.log(a.slice(-4,-3).toUpperCase().repeat(8))

// console.log(Array1); // ["Elzero"]

// console.log(`${a.substr(0,6)} ${a.substr(11,16)}`); // Elzero School

// console.log(`${a.slice(0,1).toLowerCase()}${a.slice(1,17).toUpperCase()}`)

// Challenge Plus And Minus Puzzle

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++); 100
// console.log(++a + -b + +c++ - -a++ + +a); 94
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true); 97 (true = 1)

//  Challenges Play With Variables Values

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-(d)*e); // 2000
// console.log(-(d)*e/30-20+1); // 173

// ---------------------Function

//  ---------------Basic Function And Expression

// function sayHello(userName,Age) {
//     if (Age < 20) {
//         console.log(`App is Not Suitable For You`);
//     } else {
//         console.log(`Hello ${userName} Your Age is ${Age}`)
//     }
// }

// sayHello("Hussien",25)
// sayHello("Hashem",19)
// sayHello("Mhamoud",20)

// ------------Advance Function Ex

// function generateYears(start,end,exclude) {
//     for (let i = start; i <= end ; i++) {
//         if (i === exclude) {
//             continue
//         }else {

//             console.log(i);
//         }
//     }
// }

// ------------------Return Function

// generateYears(2002,2020,2007)

// const getRectArea = function(width, height) {
//     return width * height;
// };

// console.log(getRectArea(4, 5));

// function Clac(num1, num2) {
//     return num1 + num2
// }

// console.log(Clac(10,15));

// let result = Clac(20,25)

// console.log(result);

// function generateYears(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i === 15) {
//             return`Interruptting`;
//         }
//         console.log(i);
//     }
// }

// generateYears(10,20)

//  ------------------ Function Default Parameters

// function sayHello(userName,Age = "UnKnown") {
//     // if (Age === undefined) {
//     //     Age = "UnKnown"
//     // }

//     // Age = Age || "UnKnown"

//     return `Hello ${userName} Your Age Is ${Age}`
// }

// console.log(sayHello("Hashem",19));

//  -------------Function Rest Parameter

// let result = 0;

// function Calc(...Numbers) {
//   //   console.log(Array.isArray(Numbers));
//   for (let i = 0; i < Numbers.length; i++) {
//     console.log(Numbers[i]);
//     result += Numbers[i];
//   }
//   return `Final Result Eual ${result}`
// }
// console.log(Calc(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

// -----------------Function Example Simple

// function myFunction(x, y = undefined || 3) {
//   // if (y === undefined) {
//   //   y = 3;
//   // }
//   return x * y;
// }

// console.log(myFunction(4));

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }

// console.log(findMax(1, 123, 500, 115, 44, 88));

// function MULTIPLY(price, shipping) {
//   //Return the sum
//   return price*shipping;
// }

// //Call MULTIPLY to multiply the two numbers
// var product=MULTIPLY(10, 20);

// console.log(product);

//  ------------------Function Ultimate Practic (Advanced Example)

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//   document.write(`<div>`);
//   document.write(`<h2>Welcome, ${us}</h2>`);
//   document.write(`<p>Age: ${ag}</p>`);
//   document.write(`<p>Hour Rate: $${rt}</p>`);
//   if (show === "Yes") {
//     if (sk.length > 0) {
//       document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>Skills: No Skills</p>`);
//     }
//   } else if (show === "No") {
//     if (sk.length === 0) {
//       document.write(`<p>Skills: You Are Not Have Skills</p>`);
//     } else {
//       document.write(`<p> Skills Is Hidden</p>`);
//     }
//   }
//   document.write(`</div>`);
// }

// showInfo("hashem", 19, 20, "Yes", "HTML", "CSS", "JavaScript", "React.js", "PHP");

// Assignment Number One

// function sayHello(theName, theGender) {
//     if ( theGender === "Male") {
//         console.log(`Hello Mr ${theName}`);
//     } else if ( theGender === "Female") {
//         console.log(`Hello Miss ${theName}`);
//     } else {
//         console.log(`Hello ${theName}`);
//     }
// }

// sayHello("hashem","Male")
// sayHello("Eman","Female")
// sayHello("Omer")

// Assignment Number Two

// function calculate(firstNum, secondNum, operation) {
//     if ( operation === "add") {
//         return firstNum + secondNum
//     } else if ( operation === "subtract") {
//         return firstNum - secondNum
//     } else if ( operation === "multiply") {
//         return firstNum * secondNum
//     } else if (secondNum === undefined) {
//         console.log("Second Number Not Found");
//     } else {
//         return firstNum + secondNum
//     }
// }

// calculate(20) // Second Number Not Found
// console.log(calculate(20, 30) );// 50
// console.log(calculate(20, 30, "add")); // 50
// console.log(calculate(20, 30, "subtract")); // -10
// console.log(calculate(20, 30, "multiply") );// 600

// Assignment Number Three

// function ageInTime(theAge) {
//     if ( theAge > 10 && theAge < 100 ) {
//       return theAge*31536000
//     } else {
//       console.log("Your Age Is Out Domaien");
//     }
// }

// ageInTime(110);
// console.log(ageInTime(38)); // Ans-One\2464530665472000  Ans-Two\1198368000

// Assignment Number Five

// function createSelectBox(startYear, endYear) {
//   document.write(`<div>`);
//   document.write(`<select>`);
//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option>`);
//     document.write(`${i}`);
//     document.write(`</option>`);
//   }
//   document.write(`</select>`);
//   document.write(`</div>`);
// }

// createSelectBox(2002, 2022);

// Assignment Number Six

// function multiply(...num) {
//   var temp = 1;
//   for (var i = 0; i <= num.length - 1; i++) {
//     if (typeof num[i] == "number") {
//       if (temp == 1) {
//         temp = num[i];
//         continue;
//       }
//       temp = num[i] * temp;
//     } else {
//       continue;
//     }
//   }

//   return temp;
// }

// console.log(multiply("asdsd", 10, 20));

// -------------------Anonymous Function And Practice

// function calc(num1, num2) {
//   return num1+num2
// }

// console.log(calc(10,20));

// let Calculator = function (num1, num2) {
//   return num1+num2
// }

// console.log(Calculator(10,20));

// document.getElementById("show").onclick = function () {
//   console.log("Show");
// };

// setTimeout(function () {
//   console.log("Good");
// }, 2000);

// ----------------------------- Return Nested Function

// Example 1

// function sayMessage(fName, lName) {
//   let Message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     Message = `${Message} ${fName} ${lName}`;
//   }

//   concatMsg();
//   return Message
// }

// console.log(sayMessage("Hashem","Mdoukh"));

// Example 2

// function sayMessage(fName, lName) {
//   let Message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     return `${Message} ${fName} ${lName}`;
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Hashem", "Mdoukh"));

// Example 3

// function sayMessage(fName, lName) {
//   let Message = `Hello`;
//   // Nested Function
//   function concatMsg() {
//     function getFullName() {
//       return `${fName} ${lName}`
//     }
//     return `${Message} ${getFullName()} `;
//   }

//   return concatMsg();
// }

// console.log(sayMessage("Hashem", "Mdoukh"));

// -----------------------------Arrow Function Synta

// let print = function () {
//   return 10;
// }

// let print = () => 10;

// let print = (num) => num;

// let print = function (num1, num2) {
//   return num1 + num2;
// }

// let print =  (num1, num2) => num1 + num2;

// console.log(print(100,50));

// -------------------------- Scope - Global And Local

// var a = 1;
// let b = 2;

// function showText() {
//   var a = 10;
//   let b = 20;
//   console.log(`Function - From Local Value Is ${a}`);
//   console.log(`Function - From Local Value Is ${b}`);
// }

// console.log(`From Global Value Is ${a}`);
// console.log(`From Global Value Is ${b}`);

// showText();

// function empFun() {
//   var x = "declared inside function"
//   console.log("inside function");
//   console.log(x);
// }

//   console.log(x);
// empFun()

// var x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//     console.log("Inside function");
//     console.log(x);
// }

// console.log("Outside function");
// console.log(x);

//  -----------------Scope - Block

// var x = 10;

// if (10 === 10) {
//   let x = 50;
//   console.log(`From If Block ${x}`);
// }

// console.log(`From Global ${x}`);

// -----------------------Scope - Lexical(Static)

let a = 30

// function parent() {
//   let a = 10;
  
//   function child() {
//     // Just For Try
//     // let a = 20
//     console.log(a);
//     console.log(`From Child ${b}`);

//     function grand() {
//       let b = 100
//       console.log(`From grand ${a}`);
//       console.log(`From grand ${b}`);
//     }
//     grand()
//   }
//   child();
// }

// parent();

// -------------------------Sarsh About lexical environment

// function two(){
//   // var a;
//   console.log(a);
// }
// function one(){
//   var a=2;
//   console.log(a);
//   two();
// }
// var a=1;
// console.log(a);
// one();  

// function one(){

//   function two(){
//    console.log(a);
//   }

//   var a=2;
//   console.log(a);
//   two();
// }

// var a=1;
// console.log(a);
// one();

