const bars = document.querySelector('.header__bars');
const blockTop = document.querySelector('.block-top');

bars.onclick = () => {
    blockTop.classList.toggle('active');
    bars.classList.toggle('active');
}