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



