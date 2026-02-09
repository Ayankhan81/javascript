/* // using `` backticks we can write multi line string and we can use string interpolation using ${}
var n4 =`Hey Ayan khan !!!
lets learn js `
console.log(n4);
console.log(typeof n4);

var n5 =true
console.log(n5); //true
console.log(typeof n5);// boolean

console.log(typeof typeof n5);//string

var n6
console.log(n6); // undefined

console.log(typeof n6); // undefined

var n7 =null
console.log(n7)
console.log(typeof n7);

var n8=99999999999999999999999n
console.log(n8);
console.log(typeof n8);//big int

var n9=Symbol("hello")
var n10=Symbol("hello")
console.log(n9);
console.log(n10);

console.log(n9==n10);
console.log(n9===n10);

var n11 =10
var n12 ="10"
console.log(n11==n12); //true (loosely comparision)
console.log(n11===n12); //true (strictly comparision)



          //! VAR, LET AND CONST DIFFERENCE
// declare
var a;  
console.log(a);// undefined
// initialize
a=10;
console.log(a);//10
// declare & initialize
var b=20;
console.log(b);//20
// redeclare
var b;
console.log(b);//20
//re initialize
b=30
console.log(b);//30
// re declare& re initialze
var b=40
console.log(b);//40

         //! let  (it cant be redeclare and re-declare re-initialize)
//declare
let c;
console.log(c);// undefined
// initialze
c=100
console.log(c);//100
// declare & Initialze
let d=50
console.log(d);

// re initialze
d=300
console.log(d);//300

         //! declare and initialize at the same time
         
const e=1000;
console.log(e);//1000 */

//! HOISTING :- Moving declaration part at the top of the original code internally

// const z="========Hoisting Topic========"
// console.log(z);

// console.log(a); //undefined

// var a=10
// console.log(a); //10

//! TDZ (TEmporal dead zone): the time period between accessing let and const variable before decalaration

// console.log(b); //! error -> Can't access 'b' before initialization

// let b=20
// console.log(b); //20

// // let c <------ hoisted but value will be unavailable
// console.log(c); //! error -> Can't access 'c' before initialization

// let c;
// console.log(c);

//    ! Using early return
// function getGrade(score) {
//   if (score < 0 || score > 100) return "Enter Valid Score";
//   else if (score < 33) return "Fail";
//   else if (score < 60) return "D";
//   else if (score < 70) return "C";
//   else if (score < 80) return "B";
//   else if (score < 90) return "A";
//   else if (score <= 100) return "A+";
// }

// console.log(getGrade(100));

console.log("============LOOP Practice Question======");

console.log("=====Question 1======");

// Print number from 1 To 10 using for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//  print number from 1 to 10 using a while loop

console.log("=====ques 2====");

let i1 = 1;
while (i1 <= 10) {
  console.log(i1);
  i1++;
}

// Print even number from 1 to 20 using for loop
console.log("=====quest 3====");

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Print even number from 1 to 20 using for loop
console.log("======quest 3======");

let e1 = 1;
while (e1 <= 20) {
  if (e1 % 2 === 0) {
    console.log(e1);
  }
  e1++;
}

// Print odd number using a while loop from 1 to 15
console.log("=======Quest 4");

let o1 = 1;
while (o1 <= 15) {
  if (o1 % 2 === 1) {
    console.log(o1);
  }
  o1++;
}
// Print the multiplication table of 5
console.log("======Question 5=====");

let n = 5;
let table = 0;
for (let i = 1; i <= 10; i++) {
  table = n * i;
  console.log(table);
}

// or
console.log("======2nd Method=====");

for (let i = 1; i <= 10; i++) {
  console.log(`5* ${i}=`, 5 * i);
}


// Print the sum of number from 1 to 100 using a loop.

console.log("======question 6=====");

let sumCount = 0;

for (let i = 1; i <= 100; i++) {
  sumCount += i;
}
console.log(sumCount);

// Print all number between 1 to 50 that are divided by 3

console.log("======question 7======");

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Ask the user for a number and print whether each number from 1 to that number is even or odd
// console.log("======QUestion 8=======");

// let userNum = prompt("Enter Any Number");

// for (let i = 1; i <= userNum; i++) {
//   if (i % 2 === 0) {
//     console.log("Even Number", i);
//   } else {
//     console.log("Odd Number", i);
//   }
// }

// Count How many number between 1 to 100 are divisible by both 3 & 5
console.log("======Question 9======");
let countNum =0;
for(let i=1;i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log(i);
        countNum++;
    }
    
}
console.log("Total Number is :",countNum);

//Q1  stop at first multiple of 7

/**
 write a loop from 1 to 100 that:

     print each number
     stops completely when it find the first number divisible by 7

 */
// it will Stop when it get 1 multiple of 7
let countFirstMul=1;
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
      console.log(i);
      if (countFirstMul === 1) {
          break;
    }
    countFirstMul++;
    }
}
console.log("Stops when reahed to the first multiple of 7");

for(let i=1;i<=100;i++){
    console.log(i);
    if(i % 7===0){
        break;
    }
    
}
// Q2 Skip Multiply of 3
/**
 write a loop from 1 to 20 that:
     skip number divisible by 3
     print all others


     use continue

     expected output :

     1 2 4 5 7 8 10 .........no 3,6,9 ......
 */
console.log("=======Skip Multiply of 3");

     for(let i=1; i<=20;i++){
        if(i%3===0){
            continue;
        }
        console.log(i);
        
     }

/**
 Q5 Print first 5 odd Number only

 write a loop from 1 to 100 that:
     Print only 5 odd Number
     then Stop th loop

use if,continue , counter and break

expected output :
1 3 5 7 9
 */
console.log("Print First 5 Odd Number");


let counter=1;
for(let i=1; i<=100;i++){
    if(i%2===1){
        console.log(i);
        if(counter===5){
            break;
        }
        counter++;
    }
    
}
console.log("Total Odd Number is ",counter);

console.log("=======Arrays=====");

// let arr=[1,2,3,4,4];
// arr[4]=5
// console.log(arr);

// arr.push(6,7,8);
// console.log(arr);

//   arr.unshift(1,2,3,4,);
//   console.log(arr);

//   let arrSplice=arr.splice(1,2)
//   console.log("Splice Array",arr);
//   console.log(arrSplice);

//   let abc=[10,20,30,40,50,60,70,80,90]
// console.log(abc);

// let abcNew=abc.slice(1, 3)
// console.log(abc);
// console.log(abcNew);

// abc.reverse();
// console.log(abc);

// let a=[5,3,2,4,5,6,7,2,1,1]

// let sortedA=a.sort(function(x,y){
// return x-y; //ascending order
//return y-x; descending order
// })
//   console.log(sortedA);

// ! ForEach method
let fe = [10, 20, 30, 40, 50, 60];

fe.forEach(function (val) {
  console.log(val + 5);
});

// ! Map method
let ans = fe.map(function () {
      return 12;

});
      
console.log(ans);

// ! Filter

let arr2=[1,2,3,4,5,6,7,7,8,9]
let newArr2=arr2.filter(function(val){
        if(val>4) return true;
})
console.log(newArr2);

// ! Reduce

let redArr2=arr2.reduce(function(accumulator,val){
      return accumulator+val
},0)
console.log(redArr2 );

// ! find


let ar=[1,2,3,4,5]

let[a,b]=arr2;
console.log(a,b);


let arr3=[1,2,3,4,5]

let arr4=[...arr3,6,7,8,9]
console.log(arr4); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr3); //[1, 2, 3, 4, 5]

//? Practice Question

//! Create an array with 3 fruit and print the second fruit.

let fruit=["Grapes","Banana","Litchi"]
console.log(fruit[1]);

//! Add "Match" at the end and "Pineapple" at the starting af this array

fruit.push("Mango")
fruit.unshift("Pineapple");
console.log(fruit);

//! Replace Banana with kiwi in the array above
let fruit1=['Pineapple', 'Grapes', 'Banana', 'Litchi', 'Mango']
fruit1.splice(2,1,"Kiwi");
console.log(fruit1); //['Pineapple', 'Grapes', 'Kiwi', 'Litchi', 'Mango']

// ! Remove last element
let numb=[1,2,3,4,5]
numb.pop();
console.log(numb); //[1, 2, 3, 4]

//! Insert "Red" and "blue" at index 1 at this array

let color=["Green","Yellow"];
color.splice(1,0,"Red","Blue");
console.log(color); //['Green', 'Red', 'Blue', 'Yellow']

// ! Extract only the middle 3 element from this element

let items=[1,2,3,4,5,6];
let newItems=items.slice(1,4);
console.log(newItems); //[2, 3, 4]

//! Sort This array alphabatically and then reverse it:

let names=["Zara","Arjun","Mira","Bhavya"]
// agr hm isme kuch method na bhi lagaye sirf 
// sort hi likh de to ye wese bhi alphabatically sort kr dega

names.sort();
console.log(names); //['Arjun', 'Bhavya', 'Mira', 'Zara']
names.reverse();
console.log(names); //['Zara', 'Mira', 'Bhavya', 'Arjun']

// names.sort().reverse(); hm aise bhi likh skte hn

// ! Use map() to square each number.

let square=[1,2,3,4,5]

let newSq=square.map(function(val){
  return val*val;
})
console.log(newSq); //[1, 4, 9, 16, 25]

// ! Use filter() to keep number greater than 10

let arr=[5,15,34,2,6,88,43]

let newArr=arr.filter((val)=>{
      // if(val>10) return true;
      return val>10;
})
console.log(newArr); // [15, 34, 88, 43]

// ! Use reduce Method to find the sum of this array.

let arr1=[10,20,30]

let newArr1=arr1.reduce((acc,val)=>{
  return acc+val;
},0)
console.log(newArr1);  //60

// ! Use find () to get the first number less than 10

let firstNumber=[12,15,3,8,20]

let newNum=firstNumber.find((val)=>{
    return val<10;
})
console.log(newNum); // 3


// ! Use some() to check if any student has scored below 35.

let score=[45,60,90,13]

let stdScore=score.some((val)=>{
      return val<35;
})
console.log(stdScore); // true


// ! Use every to check if all number are even.

let even=[2,4,6,8,12,14,1]

let allEvenNum=even.every((val)=>{
      return val%2===0;
})

console.log(allEvenNum); //false

// ! Destruncture this array to get firstName and Lastname

let fullName=["Ayan","Khan"];
let [firstName,lastName]=fullName;
console.log(firstName); // Ayan
console.log(lastName);  // Khan


// !  Merge two array using spread operator

let x=[1,2];
let y=[3,4];

let merge=[...x,...y];
console.log(merge);

// ! Add "India" at the start of this array using spread operator

let newEle=["India",...merge]

console.log(newEle);

// ! Clone this Array properly(not by refernce)

let p1=[1,2,3]
let cloneP=[...p1];
console.log(cloneP);

console.log("========Object==========");

let bjc = {
  Name: "ayan",
  lastName: "Khan",
  rollNo: 2203820100033,
  phno: 8127700166,
  email: "mdayankhan166@gmail.com",
};

console.log(bjc["phno"]);

// ! nesting

const user = {
  name: "Ayan",
  add: {
    city: "Sultanpur",
    pinCode: 227808,
    location: {
      lat: 23.6,
      lng: 88.8,
    },
  },
};
console.log(user.add.location.lng);

// ! Object Destructuring
// let { lat, lng } = user.add.location;
// console.log(lng);
// console.log(lat);

// ! loop

let obj = {
  name: "Ayankhan",
  age: 21,
  phno: 8127700166,
};

for (let key in obj) {
  console.log(key, obj[key]);
}

// ! object.keys
// ye object ki sabhi value ko array me dal deta h
// console.log(Object.keys(obj)); // ['name', 'age', 'phno']

//! object.entries

// console.log(Object.entries(obj));

// ! Object Copying
// let obj1 = {
//   name: "Ayankhan",
//   age: 21,
//   phno: 8127700166,
// };

// let obj2 = { ...obj1 };
// console.log(obj2);

// console.log(obj1);


// let obje1 = {
//   name: "Ayankhan",
//   age: 21,
//   phno: 8127700166,
//   add: {
//     city: "sultanpur",
//   },
// };

// let obje2 = { ...obje1 };
// obje2.add.city = "Lucknow"; // isme prblm ye hoti h ki copy to krta h lekin agr hm kuch change kare to wo previous me bhi change kr deta h
// console.log(obje1);
// console.log(obje2);

// ! Deep cloning
 
let object1 = {
  name: "Ayankhan",
  age: 21,
  phno: 8127700166,
  add: {
    city: "sultanpur",
  },
};
let object2=JSON.parse(JSON.stringify(object1));
console.log(object1);
console.log(object2);
object2.add.city="Lucknow"


// ! Optional chaining
// ye error ko handle krne ke liye use hota h

console.log(object1?.add?.city); 
// isme ye hoga ki agr maan lo kabhi koi spelling mismatch hoti h tb bhi code run krega properly


// ! Create an object for a student with name age and isEnrolled.

let Student={
    stdName:"Ayankhan",
    stdAge:21,
    isEnrolled:"true",
};
console.log(Student);

// ! Acces the value from this object

const User={
        "first-name":"Ayan",
};

console.log(User["first-name"]);


// Given a dynamic key let key="age", how will you acess user[key]

let key="age";

const User1={
    age:21,
};

console.log(User1[key]);  //21

// ! From object below print the lattitude

const locat={
    city:"Noida",
    coordinates:{
        lat:56.5,
        lng:25.5,
    },
};

let{lat,lng}=locat.coordinates
console.log(lat);
console.log(lng);

// console.log(locat.coordinates.lat);

// ! What will happen is coordinates is missing ?  how can you prevent errors?

const locations={
    city:"Noida",
    coordinatesjhj:{
        lat:565.5,
        lng:25.5,
    },
};

console.log(locations?.coordinates?.lat); //undefined

// ! Destructure the "first-name" as a variable called firstName

const user1={
    "first-name":"Ayan",
};

let{"first-name": firstName}=user1
console.log(firstName);

// ! Use for-in to log all keys in this object

const course={
    title:"JavaScript",
    duration:"4 Weaks",
};

for(let key in course){
        console.log(key,course[key]);
        
}

// ! Use Object.entries() to print all key-value pairs as :
// tittle: JavaScript
// duration:4 weaks

const course1={
    title:"JavaScript",
    duration:"4 weeks",
};

Object.entries(course1).forEach(function(val){
    console.log(val[0] + ":" +val[1]);
    
})

// ! Copy this object using spread operator

const original={a:1,b:2};

const originalCopy={...original}
console.log(originalCopy);

// ! Question

const objec1={info:{score:80}};
// const clone={...objec1};
// clone.info.score=100;
// console.log(clone.info.score);

// ! Deep clone objec1 safely

let objec2=JSON.parse(JSON.stringify(objec1));
console.log(objec2);
console.log(objec1);


//            //! GEC(Global Execution Context)
// debugger;
// console.log("Start");
// console.log(a);
// var a=10;
// console.log(a);
// let b;
// console.log(b);
// b=20;
// const c=100;
// console.log(c);
// console.log("End");

//! Type of Variable And its scopes
// 1. Global Variable

// var a=10 // Global Scope <- Due to Hoisting
// let b=20   // Script Scope <- Due to TDZ
// const c=30  // Script Scope <- Due to TDZ

// if(100>2){
//     console.log(a,b,c);

// }
// for(let i=0;i<5;i++) {
//     console.log(a,b,c);

// }
// function demo1(){
//     console.log(a,b,c);

// }
// demo1();

//! Local variable

// if(100>2){
//     var x=10;// Global variable :- Global Scope
//     let y=20;// local varaible :- block scope
//     const z=30;// local varaible :- block scope
// }
// console.log(x);//10
// console.log(y);//! Reference Error : y is not defined
// console.log(z);//! Reference Error : z is not defined

//! Note : VAr variable is also known as function scope variable because it acts like local variable with in a function

// function demo2(){
//     var m=10; // Local variable -local scope
//     let n=20; // Local variable -local scope
//     const o=30; // Local variable -local scope
// }
// demo2();
// console.log(m); //! Refernce error : m is not defined

//! FUNCTIONS

// function is used for code reusability

//! 1) NAMED FFUNCTION : a function which has name

//! Only named function can be befote the declaration due to funtion hoisting

// greet()
// function greet(){
//             console.log("Welocme");
//         }
//    greet();
// debugger
// console.log("Start");
// var a;
// console.log(a);
// fun();
// a=10;
// console.log(fun);
// function fun(){
//     var str ="HEllO"
//     console.log(str);
// }
// console.log(fun);
// fun();
// console.log("END");

// console.log("Start");
// console.log(student);
// var s1=100;
// function student(){
//     console.log("i am student");

// }
// console.log(trainer);
// let s2 =200;
// console.log(s2);
// function trainer(){
//     console.log("i am trainer");

// }
// student();
// trainer();
// console.log("end");

//! 2) ANONYMOUS FUNCTION :- function without a name

// function(){
//     console.log("i'm anonymous function");

// }

//! 3) FUNCTION EXPRESSION :- it is used call or invoke anonymous function

// console.log(f1); // undefined

// var f1= function(){
//     console.log("I'm Anonymous function called by using function expression");

// };
// console.log(f1); // it will print function with body
// f1() // it will call the function

//! 4) PARAMETRIZEED FUNCTION :- function with some parameter

// function sum(n1, n2) {
//   console.log(n1 + n2);
// }
// sum(10, 3);
// sum(10, "khan");
// sum(); //NaN(not a number) if we want zero at the place of NaN we need to declare the value of parameter with zero like (n1=0)

// function demo1(n1, n2, n3, n4, n5) {
//   console.log(n1, n2, n3, n4, n5);
//   console.log(arguments);
// }
// demo1(10,20,30,40,50,60,70,80);
// demo1(10,20,30,40,50);
demo1(10, 20);

// function printFullName(firstName,LastName,age){
//      console.log(`My Name is ${firstName} ${LastName}`);
//      console.log(`My Age is ${age}`);

// }
// let firstNameInput=prompt("Enter Your First Name");
// let LastNameInput=prompt("Enter Your Last Name");
// let ageInput=parseInt(prompt("Enter Your Age"));
// printFullName(firstNameInput,LastNameInput,ageInput);

//! 5) Return function

// function getEmail(fname, lname) {
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}${lname}@gmail.com`;
//   return [fullName, email];
// }
// let MyEmail = getEmail("Ayan", "Khan");
// // console.log(MyEmail);
// console.log(MyEmail[0]);
// console.log(MyEmail[1]);

// //! 6) NESTED FUNCTION

// function parents() {
//   console.log("I'm parent");

//   function child() {
//     console.log("I'm Child");
//   }
//   child();
// }

parents();

// ! 9) Immediatly invocked function epression(IIFE)

let p = (function () {
  console.log("This is IIFE function");
  return "hii";
})();
console.log(p);

//!

// //! 1. Object literals
// const obj1={
//     id:1,
//     fname:"Ayan"
// };
//    console.log(obj1);

// //! 2. Object Constructor
// const obj2=new Object({
//     id:2,
//     fname:"Ayankhan"

// })
// console.log(obj2);

// //! 3. Constructor Function
// function Student(id,firstName){
//     this.id=id
//     this.firstName=firstName;
// }
// let s1=new Student(1,"Ayan");
// console.log(s1);
// let s2=new Student(2,"Khan")
// console.log(s2);

// ! CRUD With object

// 1.) Create

// const obj={
//     id:1,
//     fname:"Ayan",
//     Lname:"Khan",
//     age:21,
//     company:"NA"
// };
// console.log(obj);

// // 2) read

// //! there are two ways to read
// // 1) using dot operator

// console.log(obj.fname);

// console.log(obj.loc); // undefined

// // 2) using sqaure operator

// console.log(obj["age"]);

// // ! when we want access obj value using variable reference then we use square operator

// let x = "id";
// console.log(obj[x]);

// //! if we want to apply loop on javascript then  we use for in loop

// // for in loop
// for ( let i in obj){
//     console.log( i ,obj[i]);

// };

// // 3) update

// obj.company = "tcs";
// console.log(obj);

// // 4) add new key
// obj.salary = 50000;
// console.log(obj);

// //5) delete
// delete obj.salary
// console.log(obj);

// //! object method

// let obj = {
//   id: 1,
//   ename: "john",
// };

// //! 1)object.keys()
// let keys = Object.keys(obj);
// console.log(keys);

// //! 2) object.values();
// let values = Object.values(obj);
// console.log(values);

// //! 3) object.entries()
// let keyAndValue = Object.entries(obj);
// // console.log(obj);
// console.log(keyAndValue); // [["id : 1"] , [ename : "john"]]

// //! 4) object.fromentries()
// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj);
// console.log(obj);

// // ! OBject Destructuring

// console.log("Object Destructuring");

// let objt1 = {
//   id: 1,
//   // fName:"Ayan",
//   lName: "Khan",
// };

// let { fName: firstname = "NA", lName, id, sal = 0 } = objt1;
// console.log(firstname);
// console.log(lName);
// console.log(id);
// console.log(sal);

// if key is present in objt then we get undefined if we want to access that key
// we can give default value to the key which is not present in object

// let objt2 = {
//   Id: 101,
//   name: {
//     fname: "Ayan",
//     lname: "khan",
//     age: 21,
//   },
//   hobbies: ["Coding", "Playing", "drawing"],
//   address: {
//     city: "Sultanpur",
//     State: "UP",
//     Pincode: 227808,
//   },
//   details: {
//     id: "JaneQSP1",
//     course: "FUllStack",
//   },
// };
// id,firstname,coding,city,id,course

// destructuring

//! Array destructuring

// let arr = [10, 20, 30, 40, 50];
// let [, , n1, , n2] = arr;
// console.log(n1, n2);

// Example

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

//  name,username,street, zzipcode,lat, lng,companyname

// let {
//   name,
//   username,
//   address: {
//     street,
//     zipcode,
//     geo: { lat, lng },
//   },
//   company: { name: companyName },
// } = user;
// console.log("=========Example===========");

// console.log(name);
// console.log(username);
// console.log(street);
// console.log(zipcode);
// console.log(lat);
// console.log(lng);
// console.log(companyName);

//! -----this keyword---------

// console.log(window);
// console.log(this);

// ! How to create your own method
// ! Note:- Don't use arrow function to create method because "THIS " keywords refers to window object
// ! If the function is stored in object object then it is called an method

// let student={
//   id:1,
//   fname:"Ayan",
//   lname:"Khan",
//   getFullName:function(){
//     console.log(`${this.fname} ${this.lname}`);

//   },
//   getEmail(){
//     console.log(`${this.fname}.${this.lname}@gmail.com`);

//   },
// };
// console.log();
// student.getFullName();
// student.getEmail();

// ! call() , apply() and bind()

// function getFUllName(){
//     return `${this.firstName} ${this.lastName}`
// }
// function courseDetails(sub1, sub2){
//   return `${this.course} include ${sub1} ${sub2}`
// }

// let user1={
//   id:1,
//   firstName:"Ayan",
//   lastName:"Khan",
//   course:"frontend",
// };

// let user2={
//   id:2,
//   firstName:"Shahan",
//   lastName:"Khan",
//   course:"Full Stack",
// };

// // ! call()
// // ----- Calling User1-----
// let fullName1=getFUllName.call(user1);
// console.log(fullName1);

// // ----- Calling User2-----
// let fullName2=getFUllName.call(user2);
// console.log(fullName2);

// let courseFullDetails= courseDetails.call(user1,"JS","NodeJS")
// console.log(courseFullDetails);

// // ! Apply()   Immmediately call the function
// let fullName3=getFUllName.apply(user2);
// console.log(fullName3);

// let coursedetails2=courseDetails.apply(user1,["JAVA","SPRINGBOOT"])
// console.log(coursedetails2);

// // ! Bind()   return bounded function whicch czn be call later on

// let boundedGetFullName=getFUllName.bind(user1);
// console.log(boundedGetFullName);

// let boundedCourseDetails=courseDetails.bind(user1)
// console.log(boundedCourseDetails("HTML","CSS"));

// ! Json

// let user1={
//   id:1,
//   fname:"Ayan",
//   lname:"Khan",
// };

// function storeDataInLocalStorage(){
//   let jsonData=JSON.stringify(user1);// js to json
// }

// function getDataFromLocalStorage(){
//   let data=localStorage.getItem("UserData");
//   let userObject =JSON.parse(data);// json to js
//   console.log(userObject);
//   document.writeln(`<em>${userObject.fname}</em>`)

// }

// function removeSingleDataFromLocalStorage(){
//   localStorage.removeItem("Demo1")
// }

// function clearDataFromLocalStorage(){
//   localStorage.clear();
// }

// ! ===============ARRAYS==================
// // Arrays are hetrogenous in nature

// // 1) Array literals
// let arr1=[10,true,"Ayan",()=>{},null,1n,undefined];// Multiple data can be define in array
// console.log(arr1);

// // 2) Array constructor
// let arr2=new Array(10,false,"bye",function(){});
// console.log(arr2);

// // ! Array methods
// let arr1=[10,20,30];
// console.log(arr1);[10, 20, 30]

// //! array.push() : Appends new element to the end of an array and returns the new length of the array.

// let newLength =arr1.push(50,60,70);
// console.log(arr1);  // [10, 20, 30, 50, 60, 70]
// console.log(newLength); //6 <---new length of array

// // ! array.pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let returnVal= arr1.pop();
// console.log(arr1);// [10, 20, 30, 50, 60]
// console.log(returnVal); // 70

// // ! array.unShift() : Inserts new elements at the start of an array, and returns the new length of the array.
// arr1.unshift("Ayan",100);
// console.log(arr1); //['Ayan', 100, 10, 20, 30, 50, 60]
// console.log(arr1.length); // 7

// // ! array.shift() :Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// arr1.shift()
// console.log(arr1); //[100, 10, 20, 30, 50, 60]
// console.log(arr1.length); // 7

// // ! splice() method : It is the method of adding new element wherever we want
//                     //  ! it modify in orginal array
// // splice(StartIndex , DeleteCount , newElement)

// let arr2=[10,20,30,40,50];
// console.log(arr2); //[10,20,30,40,50]
// //  ! Adding new element

// arr2.splice(3,0,35)
// console.log(arr2); //[10,20,30,35,40,50]

// arr2.splice(4,0,45,47,49)
// console.log(arr2);

// // ! Deleting element

// arr2.splice(3,4); /* start  index means from where you want to start and
//                    delete count means how many number you want to delete in a row  */
// console.log(arr2); //[10,20,30,40,50]

// // ! Delete and adding multiple element at a time

// let arr3=[100,200,300,400,500];
// console.log(arr3); //[100,200,300,400,500]

// arr3.splice(2,2,250,270,290)
// console.log(arr3);

// // ! Slice(startIndex, endIndex) :
// /*it returns new array
//   it returns the value between startindex and endIndex
//  and it ignores the last index return the value just before end index */

// let arr4=[5,6,7,8,15,25,35,45,55]
// console.log(arr4);//[5,15,25,35,45,55]

// let newArr=arr4.slice(1,3)
// console.log(newArr); //[6,7]
// console.log(arr4);   //[5,6,7,8,15,25,35,45,55]

// /*    -6,-5,-4,-3,-2,-1
//  arr=[10,20,30,40,50,60]
//         0 ,1 ,2 ,3, 4 ,5   */

// let newArr2=arr4.slice(1,-1);
// console.log(newArr2); //[6, 7, 8, 15, 25, 35, 45]

// let newArr3=arr4.slice(2);
// console.log(newArr3); //[7, 8, 15, 25, 35, 45, 55]

// // ! Sort()
// // it is use to sort the array

// let arr5=[1,7,4,0,5,6,3,8,9,2];
// arr5.sort(); //ASC
// console.log(arr5); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arr6=[80,883,38,47,92,9,1]
// console.log(arr6);// [80, 883, 38, 47, 92, 9, 1]

// arr6.sort((a,b) => a-b)
// console.log(arr6); //[1, 9, 38, 47, 80, 92, 883]

// // ! concat() : adding two or more element

// let arr9=[10,20,30] //[[10,20,30] ]
// let arr10=[40,50,60] //[[40,50,60]]

// let newConcatArr=arr9.concat(arr10)
// console.log(newConcatArr);  //[10, 20, 30, 40, 50, 60]

// // !=============== ADVANCE ARRAY METHOD==================

// // ! forEach(callbckFunc)
// console.log("=========forEach==========");

// // used to iterate an array, returns undefined
// // for each me value return nhi hoti h

// let arr1=[10,20,30,40,50]
// let returnval1=arr1.forEach((Element, index, array)=>{
//   console.log(Element, index, array);
//   return Element+5;
// })
// console.log(returnval1); // undefined

// // ! map(callbackFunc)
// console.log("=============MAP=========");
// // Used to iterate any array returns a new array

// let returnVal2=arr1.map((Element, index, array)=>{
//   console.log(Element, index, array);
//   return Element+5;
// })
// console.log(returnVal2); // [15, 25, 35, 45, 55]

// // ! filter(callbackFunc)
// console.log("=========filter===========");

// /*
// map aur filter me ye difference h ki map true false me return krta h
// jb ki filter value provide krta h
// */
//  let arr2=[100,200,300,400,500]
//  let returnVal3=arr2.filter((ele, ind, array)=>ele>200);
//  console.log(returnVal3);//[300,400,500]

// // ! find(callbackFunc)
// console.log("==========find=============");
// /**
//  * it is used find the single element
//  * filter aur find me ye differnece h ki filter kayi value ko return krta h
//  * aur find single value ko return krta h
//  */

// let returnVal4=arr2.find((ele, idx, array) => ele > 200);
// console.log(returnVal4);

// // ! findIndex(callbackFunc)
// console.log("==============findindex===========");
// let returnVal5=arr2.findIndex((ele, idx, array) => ele > 200);
// console.log(returnVal5);

// // ! reduce(callbackFunc)
// console.log("==========reduceFunction===========");

// let arr4=[10,20,30,40,50];
// let sumVal=arr4.reduce((acc,ele)=>{
// console.log(acc,ele);

//   return acc+ele;
// },0);

// console.log(sumVal); //150

// // ! toString()
// console.log("============toString============");

// let arr1=[1,2,3,4,5]

// let str1=arr.toString()
// console.log(str1); // 10,20,30,40,50

// // ! join()
// console.log("===========join================");

// let str2=arr.join(" ")
// console.log(str2); //10 20 30 40 50

// //  ! split()
// console.log("=============split=========");

// let str ="AYANKHAN"
// console.log(str.split(""));

// // Example

// function pallindrome(word){
//   let output=word.split("").reverse().join("")
//   return output===word? true :false;
// }
// console.log(pallindrome("abc"));
// console.log(pallindrome("racecar"));

// ! ==========03/02/2026==========

console.log("===========Promises================");

//! Promises:- it is object it has three state
// then catch finally is used in promises

// const p1=new Promise((resolve, reject)=>{
// if(10>2){
//   resolve("Hello World");
// }
// else{
//   reject("Bye Bye");
// }
// })
// console.log(p1);

// p1.then((data)=>{
//   document.writeln(`<h1>${data}</h1>`)
// });

// p1.catch((err)=>{
//   document.writeln(`<h1>${err}</h1>`)
// });

// p1.finally(()=>{
//   console.log("I'm Finally Block");

// })

// ! Promises With then, catch, and Finally

// const API_url = "https://dummyjson.com/todos";

// let p1 = fetch(API_url);
// console.log(p1);

// p1.then((response) => {
//   let p2 = response.json();
//   console.log(p2);

//   p2.then((data) => {
//     console.log(data.todos);
//   });

//   p2.catch((err) => {
//     console.log(err);
//   });
// });

// p1.catch((err) => {
//   console.log(err);
// });

// ! Promise with ASYNC and AWAIT

const API_url = "https://dummyjson.com/todos";

async function getTodos(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data); // {todos: Array(30), total: 254, skip: 0, limit: 30}

    displayTodos(data.todos); //Array(30)
  } catch (err) {
    console.log(err);
  }
}
getTodos(API_url);

function displayTodos(allTodos) {
  console.log(allTodos);
  allTodos.map((ele) => {
    // console.log(ele);
    let { id, userId, todo, completed } = ele;

    document.writeln(`
        <div class="todo">
            <h4>
                ${todo}
            </h4>
            <span>${completed ? 'Completed' : 'Pending'}</span>
        </div>
        `);
  });
}


