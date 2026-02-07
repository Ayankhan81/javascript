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
console.log(newNum); /