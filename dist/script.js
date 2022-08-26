// navigation

let navUl =  document.getElementById('uls');
let menuIcon = document.getElementById('icon');


const menuToggler = () => {
	const expanded = menuIcon.getAttribute("aria-expanded");
	navUl.style.display = "block";
    if (expanded === "false") {
	navUl.style.display = "block";
	navUl.style.visibility = "visible";
	menuIcon.setAttribute("aria-expanded", "true");
	menuIcon.setAttribute("src", "./images/icon-close.svg");
}
	   
	else {
	 navUl.style.display = "none";
	 navUl.style.visibility = "hidden";
	 menuIcon.setAttribute("aria-expanded", "false");
	menuIcon.setAttribute("src", "./images/icon-hamburger.svg");
 }


}

menuIcon.addEventListener('click', menuToggler);



// spinner

let spinner = document.querySelector('.page');

const removeSpinner = () => {
	spinner.style.display = "none";
}

window.addEventListener('load', removeSpinner);

// AOS initialised

AOS.init({
	offset: 200,
	duration: 600,
	easing: 'ease-in-sine',
	delay: 100,
	once: false,
  });


//   carousel

var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: 'true',
	fade: 'true',
	grapCursor: 'true',
	loop: true,
	centerSlide: 'true',
	autoplay: {
	  delay: 2500,
	  disableOnInteraction: false,
	},
	effect: "fade",
    grabCursor: true,
    pagination: {
    el: ".swiper-pagination",
    },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	  dynamicBullets: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });


//   autotyping
  

