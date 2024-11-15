const bars = document.querySelector('.header__bars');
const blockTop = document.querySelector('.block-top');

bars.onclick = () => {
    blockTop.classList.toggle('active');
    bars.classList.toggle('active');
}


let footerTitle = document.querySelector('.footer__bottom-title');
let footerRight = document.querySelector('.footer__bottom-right');

footerTitle.addEventListener('click', () => {
    footerRight.classList.toggle('active');
    footerTitle.classList.toggle('active');
})


