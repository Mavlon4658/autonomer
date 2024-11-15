const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const bars = document.querySelector('.header__bars');
const blockTop = document.querySelector('.block-top');

bars.onclick = () => {
    blockTop.classList.toggle('active');
    bars.classList.toggle('active');
    if (bars.classList.contains('active')) {
        bodyHidden();
    } else {
        bodyVisible();
    }
}

const likes = document.querySelectorAll('.like');

likes.forEach(el => {
    el.onclick = () => {
        el.classList.toggle('active');
    }
})

let footerTitle = document.querySelector('.footer__bottom-title');
let footerRight = document.querySelector('.footer__bottom-right');

footerTitle.addEventListener('click', () => {
    footerRight.classList.toggle('active');
    footerTitle.classList.toggle('active');
})

let swiper;

function initSwiper() {
    if (window.innerWidth >= 576) {
        if (!swiper) {
            swiper = new Swiper(".exclusiveSwiper", {
                spaceBetween: 16,
                slidesPerView: 2,
                navigation: {
                    nextEl: ".exclusive-button-next",
                    prevEl: ".exclusive-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                },
            });
        }
    } else {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
        const swiperContainer = document.querySelector(".exclusiveSwiper");
        swiperContainer.classList.remove("swiper-container");
        const slides = document.querySelectorAll(".exclusiveSwiper .swiper-slide");
        slides.forEach(slide => {
            slide.classList.remove("swiper-slide");
            slide.style.width = "100%";
        });
    }
}

initSwiper();

window.addEventListener("resize", initSwiper);


let numberSwiper;

function initNumberSwiper() {
    if (window.innerWidth >= 576) {
        if (!numberSwiper) {
            numberSwiper = new Swiper(".numberSwiper", {
                spaceBetween: 16,
                slidesPerView: 2,
                navigation: {
                    nextEl: ".number-button-next",
                    prevEl: ".number-button-prev",
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                },
            });
        }
    } else {
        if (numberSwiper) {
            numberSwiper.destroy(true, true);
            numberSwiper = null;
        }
        const swiperContainer = document.querySelector(".numberSwiper");
        swiperContainer.classList.remove("swiper-container");
        const slides = document.querySelectorAll(".numberSwiper .swiper-slide");
        slides.forEach(slide => {
            slide.classList.remove("swiper-slide");
            slide.style.width = "100%";
        });
    }
}

initNumberSwiper();

window.addEventListener("resize", initNumberSwiper);



