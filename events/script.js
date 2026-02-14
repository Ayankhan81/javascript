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

let h2=document.querySelector("#headh2")
let a=document.querySelector("#main")
window.addEventListener("keydown",function(dets){
    if(dets.key===" "){
        h2.textContent="Space"
    }
    else{
        h2.textContent=dets.key;
    }
    
})


let btn=document.querySelector("#btn")
let choosefile=document.querySelector("#fileinput")
btn.addEventListener("click",function(){
        choosefile.click();
        
})

// choosefile.addEventListener("change",function(dets){
//            btn.textContent=dets.target.files[0].name;   
// })

// ise hm ek aur tarike se kr skte hn
// isse hoga ye ki agr hm cancel kr denge file pe click krne ke baad to error nhi aayega wrna error aa jyega
choosefile.addEventListener("change",function(dets){
    const file=dets.target.files[0];
    if(file){
        btn.textContent=file.name
    }
})

