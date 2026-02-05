console.log("========DOM============");

// // ! DOM SELECTOR:-  THEY ARE OF 5 TYPES

// /* used to target HTML element in js

// document.getElementById(); Returns the first element within node's descendants whose ID is elementId.Else returns null
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();
// */
// // ! document.getElementById();
// console.log("======getElementByID========");

// let h2Tag=document.getElementById("head2");
// console.log(h2Tag);

// console.log(h2Tag.textContent);
// console.log(h2Tag.innerHTML);

// //! document.getElementsByClassName();
// console.log("======getElementByclassName========");

// let h3Tag=document.getElementsByClassName("head3")
// console.log(h3Tag); //HTMLCollection(3) [h3.head3, h3.head3, h3.head3]

// console.log(h3Tag[1].textContent);
// // if we want to check array is pure or not
// //  it is check by Array.isarray()  return boolean

// console.log(Array.isArray(h3Tag)); //false

// // conver impure array to pure array->Array,from() returns pure array
// let pureArray=Array.from(h3Tag);
// console.log(pureArray);

// //! document.getElementsByTagName();
// console.log("======getElementBytagName========");

// let tagCollection=document.getElementsByTagName("h3")
// console.log(tagCollection);

// let pureTagColleection=Array.isArray(tagCollection)
// console.log(pureTagColleection);

// //! document.querySelector(id, class , tagName)
// console.log("======qerrySelector()========");

// let elem1=document.querySelector("#head2")
// console.log(elem1);

// let elem2=document.querySelector(".head3");
// console.log(elem2);

// let elem3=document.querySelector("h1")
// console.log(elem3);

// let ele4=document.querySelector("h3, .head3, #head2")
// console.log(ele4);

// ! document.querySelectorAll()
// let ele5 = document.querySelectorAll(".head3");
// console.log(ele5);

// Whenever we use getElementByClassName or tagName we get HTML collection
// Whenever we use querrySelectorAll we get NodeList

// ! Difference between HTML collection and NodeList

/*
Cannot use anyy of the array method in HTML Collection
Can use forEach() method in NodeList
HTML Collection is Called live Collection
Node List is Called Static Collection


 Similarity:-
 Both are Impure Array
 */

//! Example of sttaic and live collection

// const collection=document.getElementsByTagName("div")
// const list=document.querySelectorAll("div")

// console.log("HTML collection ==",collection.length); // 3
// console.log("NodeList ==",list.length); // 3

// ! Creating HTML dynamicallly
// for(let i=0;i<5;i++){
// const divTag=document.createElement("div")
// divTag.textContent="Div-4"
// console.log(divTag);
// document.body.appendChild(divTag)
// }
// console.log("HTML collection ==",collection.length); // 4 (live)
// console.log("NodeList ==",list.length);  // 3 (static)


//! DOM Manipulation
const mainContainer=document.querySelector("#table-container")

const tableTag=document.createElement("td")

const trTag1=document.createElement("tr")
const trTag2=document.createElement("tr")
const trTag3=document.createElement("tr")

const thTag1=document.createElement("th")
const thTag2=document.createElement("th")
const thTag3=document.createElement("th")

const tdTag1=document.createElement("td")
const tdTag2=document.createElement("td")
const tdTag3=document.createElement("td")
const tdTag4=document.createElement("td")
const tdTag5=document.createElement("td")
const tdTag6=document.createElement("td")

tableTag.border="1"
tableTag.cellSpacing ="0"
tableTag.cellpadding ="5"

thTag1.textContent="ID"
thTag2.textContent="FNAME"
thTag3.textContent="LNAME"

tdTag1.textContent="1"
tdTag2.textContent="John"
tdTag3.textContent="Doe"
tdTag4.textContent="2"
tdTag5.textContent="Jane"
tdTag6.textContent="Doe"

trTag1.appendChild(thTag1,thTag2,thTag3); // here one child will be append. so we will use only append instead of

trTag1.append(thTag1,thTag2,thTag3);
trTag2.append(tdTag1,tdTag2,tdTag3);
trTag3.append(tdTag4,tdTag5,tdTag6);

tableTag.append(trTag1,trTag2,trTag3)

console.log(tableTag);


mainContainer.append(tableTag)