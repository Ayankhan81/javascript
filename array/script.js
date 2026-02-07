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
