const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu-link");

let menuOpen = false; // Track the state of the menu

menuToggle.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function toggleMenu() {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  gsap.to(menuToggle, {
    rotation: 45,
    duration: 0.5,
  });

  gsap.to(menuToggle.querySelector("span"), {
    color: "white",
    duration: 0.5,
  });

  gsap.to(menu, {
    opacity: 1,
    pointerEvents: "all",
    duration: 0.5,
  });
  menuOpen = true;
}

function closeMenu() {
  gsap.to(menuToggle.querySelector("span"), {
    color: "black",
    duration: 0.5,
  });

  gsap.to(menuToggle, {
    rotation: 0,
    duration: 0.5,
  });

  gsap.to(menu, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.5,
  });
  menuOpen = false;
}

//Sliding image function on main page

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

