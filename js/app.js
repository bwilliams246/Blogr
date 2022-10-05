/* DESKTOP LOGIC */
    /* GLOBAL VARIABLES */
const navOptions = [...document.getElementsByClassName('sub-container')];
const navInfo = [...document.getElementsByClassName('extra-nav-info')];

    /* EVENT LISTENERS */
navOptions.forEach((link , i) => link.addEventListener('click' , e => {
    navInfo[i].classList.toggle('hide');
}));

    /* FUNCTIONS */

/* MOBILE LOGIC */