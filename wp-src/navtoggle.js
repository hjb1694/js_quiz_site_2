const toggleNav = () => {
    document.querySelector('.nav').classList.toggle('show');
}


document.querySelector('.header__navtoggle').addEventListener('click',toggleNav);
document.querySelector('.nav__closebtn').addEventListener('click',toggleNav);