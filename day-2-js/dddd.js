// // //variable declaration
// // let age = 20;
// // const fullname= "Deepa Ghimire";
// // age = 22;
// // console.log("name :",fullname)
// // console.log("current age:" ,age)



// // //assignment op 
// // let a=2;
// // let b=3;

// // console.log(a)
// // console.log(b)


// // //arithmetic op 
// // sum=a+b;
// // console.log(sum)
// // sub = a-b;
// // console.log(sub)
// // mul = a*b;
// // console.log(mul)
// // did =a/b;
// // console.log(did)

// // //comparison op 
// // if (a<b) {

    
// // } else {
// //     console.log(false)
// // }





// //write a program to find the sum of two numbers

// const a = 10 ;
// const b = 20;

// // console.log(a)
// // console.log(b)

// sum= a+b;
// console.log(sum)


// //write a program to find the diff of two numbers
//  const diffone = 20;
//  const difftwo = 10;
  
//  diff = diffone-difftwo;
//  console.log(diff)

//  //write a program to find the product of two numbers
//  const productone = 10;
//  const producttwo = 20;
//   product = productone*producttwo;
//   console.log(product)

// //comparing the value 
// if (a>b) {
//     console.log(false)
// } else {
//     console.log(true)
// }

// //ternary op

// const checkData = a == b ?"is same": "is not same";
// console.log(checkData);

// //at
// let classes = ["1","2","3"]
// const newclass = classes.at(-2);
// const newclass2 = classes.push("4","5");
// const newclass4 = classes.unshift("4","5");
// const newclass3 = classes.pop();
// const newclass1 = classes.length;


// console.log(newclass)
// console.log(newclass1)
// console.log(newclass3)
// console.log(class


let students =[
{
    Name :"Sweta",
    Age :20,
    Address :"Dharan-18",

},

{
    Name :"Siwani",
    Age : 21,
    Address :"Dharan-13",
},
{
    Name :"Ashim",
    Age : 15,
    Address :"Dharan-13",
},
{
    Name :"Deepa",
    Age : 22,
    Address :"Dharan-18",
},


]

const newstudents=students.push(
    {
        Name : "Deepsikha",
        Age : 11,
        Address : "Dharan-02",
    },
)
console.log(students)

const a= students.map((students) => (students.Address=="Dharan-18" && students) )
//afno bahek 
const a2= students.map((students) => (students.Address!=="Dharan-18" && students) )
console.log(a2.filter(Boolean))



