//Create a traditional function named sum that takes two numbers as parameters and returns their sum.
function sum( a,b ) {
    return a+b;
}
console.log(sum(5, 3));
console.log(".............................")



//Create an arrow function named multiply that takes two numbers and returns their product.
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); 

console.log("....................................")

// Create a function with a default parameter named greet that takes a name and prints "Hello, [name]!". 
// If no name is provided, it should default to "Guest".

 function greet  (name1="Guest") { return ` hello ${name1}`;}
 console.log(greet("sweta"));
 

 console.log("...............................")

 //Use a loop (for, while, do-while, and forEach) to iterate through an array of numbers [1, 2, 3, 4, 5] and print each element.

 //for loop
for (let i=1;i<=5;i++)
console.log(i);
console.log("---------")
//while loop

let j=0 ;
while (j<5) {
    j++;
    console.log(j);
}
console.log("-------")
//dowhile 
 let k=1;
 do
{ console.log(k);
    k++;
}
 while (k<6);

 console.log("--------")
 //for each
let numbers= [1,2,3,4,5];
numbers.forEach =(num)=> console.log(num);

console.log("..........")
//Use the spread operator to merge two arrays.

const section_A  = ["deepa","dipesh","sweta"];
console.log(section_A);

const section_B = [ "siwani", "ashim"];
console.log(section_B);
const section_AB= [...section_A,...section_B]
console.log(section_AB);

console.log("......")

//Perform array operations:
// Add elements to the end using push().
 const num=[1,2,3,4,5];
 console.log(num);
  num.push(6,7)
 console.log(num);

console.log("............................................")
// Add elements to the beginning using unshift().
console.log("")
const array  =["ram","shyam","hari"];
console.log(array);
console.log("-------")
array.unshift("gopal","krishna")
console.log(array);
console.log("--------")
// Remove the first element using shift().
array.shift("gopal");
console.log(array);


 

