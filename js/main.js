// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
    var Swipes = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

  });
  $(document).ready(function() {
    // Swiper: Slider
        new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 3,
            paginationClickable: true,
            centeredSlides: true,
            spaceBetween: 30,
            breakpoints: {
                1920: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1028: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        });
    });
// slide-testmonial
    var swiper = new Swiper(".slide-testmonial", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1028: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        }
    });
    // clinet
    var Swipes = new Swiper('.client .swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
        nextEl: '.fa-solid fa-right-long',
        prevEl: '.fa-solid fa-left-long',
    },
});


const navbar = document.querySelector('.navbar');
const scrollBtn = document.querySelector('.scroll-top');

window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
};


