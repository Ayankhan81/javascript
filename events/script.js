console.log("=======Events=========");

let head1 = document.querySelector("h1");

// ! single click pe changes

function singleClick() {
  head1.style.color = "red";
}
head1.addEventListener("click", singleClick);

// ! doubleclick pe changes

function doubleClick() {
  head1.style.color = "green";
}
head1.addEventListener("dblclick", doubleClick);

// ! input me change aur use cosole pe print karana

let inp = document.querySelector("input");
inp.addEventListener("input", function (evt) {
  if (evt.data !== null) {
    console.log(evt.data);
  }
});

let address = document.querySelector("#Address");
address.addEventListener("input", function (dets) {
  if (dets.data !== null) {
    console.log(dets.data);
  }
});

// ! change event event tab chlta h jb aapka koi input sleect ya textarea me koi change aa jye

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function (dets) {
  device.textContent = `${dets.target.value} is Selected`;
});

let h2 = document.querySelector("#headh2");
let a = document.querySelector("#main");
window.addEventListener("keydown", function (dets) {
  if (dets.key === " ") {
    h2.textContent = "Space";
  } else {
    h2.textContent = dets.key;
  }
});

let btn = document.querySelector("#btn");
let choosefile = document.querySelector("#fileinput");
btn.addEventListener("click", function () {
  choosefile.click();
});

// choosefile.addEventListener("change",function(dets){
//            btn.textContent=dets.target.files[0].name;
// })

// ise hm ek aur tarike se kr skte hn
// isse hoga ye ki agr hm cancel kr denge file pe click krne ke baad to error nhi aayega wrna error aa jyega
choosefile.addEventListener("change", function (dets) {
  const file = dets.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
});

let form = document.querySelector("form");
let inputs = document.querySelectorAll(".detail");
let mainform = document.querySelector(".mainForm")


form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  let card=document.createElement("div")
  card.classList.add("card")

  let profile=document.createElement("div")
  profile.classList.add("profile")

  card.appendChild(profile);

  let image=document.createElement("img")
  image.setAttribute("src",inputs[0].value)
  profile.appendChild(image)

  let heading=document.createElement("h3")
  card.appendChild(heading)
  heading.textContent=inputs[1].value

  let heading5=document.createElement("h5")
  card.appendChild(heading5)
  heading5.textContent=inputs[2].value


  let para=document.createElement("p")
  card.appendChild(para);
  para.textContent=inputs[3].value

  mainform.appendChild(card)
  

  inputs.forEach(function(inp){
     if( inp.type !=="submit"){
       inp.value="";
     }
  })
 
});

// ! MouseOver & MouseMove

// let abc=document.querySelector("#abc")
// abc.addEventListener("mouseover",function(){
//   abc.style.backgroundColor="yellow"
// })
// abc.addEventListener("mouseout",function(){
//   abc.style.backgroundColor="red"
// })

// window.addEventListener("mousemove",function(dets){
//    abc.style.top=dets.clientY + "px"
//    abc.style.left=dets.clientX + "px"
  
// })


// let lists=document.querySelector("ul")
// lists.addEventListener("click",function(dets){
// dets.target.style.textDecoration="line-through"
// })

// is ka ek method aur h

let list =document.querySelector("ul")
list.addEventListener("click",function(dets){
      dets.target.classList.toggle("lt")
})
