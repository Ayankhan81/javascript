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

console.log("====DOM====");

let a=document.getElementById("h1Tag")
console.dir(a);
let b=document.getElementsByClassName("heading1")
console.log(b);

let c=document.querySelector("h2")
console.dir(c);


let d=document.querySelector(".heading1")
d.textContent="Hello, Ayan"
d.innerHTML="Hello, Ayan How Are You"  // ye h2 ke html ke andr changes kr dega 
d.innerText="What are You learning";

let h3=document.querySelector("h3")
h3.innerHTML="<i>iconTag</>"
console.dir(h3);
h3.hidden=true;

let e=document.querySelector("a")
console.dir(e);
e.href="https://www.google.com"

e.setAttribute("href","https://www.instagram.com")

console.log(e);

let f=document.querySelector("img")
f.setAttribute("src","../../assests/sectionb4-toys.jpg")

 let i=document.querySelector("a")
console.dir( i.getAttribute("href"));

let j=document.querySelector("a")
j.removeAttribute("href")

// ! Dynamic Dom Manipulation

// ! Create Element
// append/prepend karo jaha bhi element chahiye wah append body ke starting me add krega element ko aur prepend body ke end add karega element ko


// let h1=document.createElement("h1")
// h1.textContent="Hii, Ayan Khan"
// document.body.append(h1); // ek tarika ye h
// document.querySelector("body").append(h1); // dusra tarika ye h

// let divTag=document.createElement("h1")
// divTag.textContent="Hey, I'm H1 Tag"
// document.querySelector("div").append(divTag)


// Style update


// let h11=document.querySelector("h1")
// h11.style.color="red"
// h11.style.background="yellow"

// let x=document.querySelector("h2")
// // ! For adding class

// x.classList.add("headingTag")

// // ! For Removing Class
// x.classList.remove("headingTag")

// // ! toggle // agr class hogi to hta dega agr nhi hogi to lga dega

// x.classList.toggle("toglleClassName")
// ! Practice Question

// T1: Select the heading of the page by ID and changes it's text to "WELCOME TO SHERYIANS !"

let t1=document.getElementById("heading")
t1.textContent="WELOCME TO SHERYIANS !"

// T2: Select all <li> element and print thier text using a loop

let t2=document.querySelectorAll("li")
t2.forEach(function(val){
    console.log(val.textContent);
    
})

// T3: Select a paragraph and replace its content with:
// <b>Updated<b/> by js

let t3=document.querySelector("p")
t3.innerHTML="<b>Updated</b>  by JAVAScript"

// T4: select a link and update its href to point https://sheryians.com

let t4=document.querySelector("a")
t4.href="sheryians.com"
t4.setAttribute("href","sheryians.com")

// T5: Add a tittle attribute to a div dynamically
let t5=document.querySelector("div")
t5.setAttribute("title","Some Information")

// T6: Remove the disabled attribute from button
let t6=document.querySelector("button")
t6.removeAttribute("disabled")

// T7: Create a new list item <li>New Tasks</li> and add it to the end of a <ul>

let t7=document.querySelector("ul")
let Newli=document.createElement("li")
Newli.textContent="New Tasks"

document.querySelector("ul").appendChild(Newli)
// t7.appendChild(Newli)

// T8 :Create a new img element with placeholder source and add it at the top of the div
let t8=document.createElement("img")
t8.setAttribute("src","../../assests/sectionb4-toys.jpg")

document.querySelector("div").prepend(t8);


// T9:Select the first element in list and delete it from thr Dom

let ul=document.querySelector("ul")
let t9=document.querySelector("li")
ul.removeChild(t9);

// T10: Add a highlight class to every even item in a lists

let t10=document.querySelectorAll("ul li:nth-child(2n)")

t10.forEach(function(elem){
    elem.classList.add("highlight")
})

// T11: Set the font size of <P></P> element to 18px using .style

let t12=document.querySelectorAll("#para")
t12.forEach(function(elem){
    elem.style.fontSize="18px"
});

