const bntNavbars = document.querySelector('.bnt__navmobile');
const navBarsMoblie = document.querySelector('.navbar_top-mobile');
const navOverlay = document.querySelector('.navbars_overlay');
const bntNavClose = document.querySelector('.bnt-close-navbar');


bntNavbars.onclick = function() {
    navOverlay.style.display = 'block';
    navBarsMoblie.classList.add('active');
}

function cotrolNavClose() {
    navOverlay.style.display = 'none';
    navBarsMoblie.classList.remove('active');
}
navOverlay.onclick = cotrolNavClose;
bntNavClose.onclick = cotrolNavClose;