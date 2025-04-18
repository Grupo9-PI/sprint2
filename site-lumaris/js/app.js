
//linha que faz a navbar grudar
window.onscroll = () => {stickyNav()};



var navbar = document.querySelector('.navbar');
var logoNav = document.querySelector('.logo-img');

function stickyNav() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
        setTimeout(() => {
            logoNav.src = 'images/logo_extenso.png';
        }, 1000);
        
    } else {
        navbar.classList.remove("sticky");
        setTimeout(() => {
            logoNav.src = 'images/logo.png';
        }, 1000);
    }
}