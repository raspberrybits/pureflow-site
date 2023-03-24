// Elements that will change properties
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

// Element selection
const main = document.querySelector("main");


// Dark mode properties
declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
    localStorage.setItem('dark', true);
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
    localStorage.removeItem('dark');
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

// Listen for interaction with buttons
function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}


events();


/* dark mode on all pages */

function checkdark(){
  let testing = localStorage.getItem('dark');
  if(testing){
    let clone = big_wrapper.cloneNode(true);
    clone.classList.add("dark");
    clone.classList.add("copy");
    main.appendChild(clone);
    events();
  }
}

function delstor(){
  localStorage.removeItem('dark');
}



/* gallery- fullscreen */

function FullView(ImgLink){
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
}
function CloseFullView() {
  document.getElementById("FullImageView").style.display = "none"
}