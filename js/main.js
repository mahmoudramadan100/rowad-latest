// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// Header Slider
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    }
    var Swipes = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      paginationClickable: false,
      centeredSlides: true,
      spaceBetween: 0,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

  });

//   testmonial Slider
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
                768: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    // centeredSlides: false,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                }
            }
        });
    });

// slide-testmonial
    // var swiper = new Swiper(".slide-testmonial", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     pagination: {
    //     el: ".swiper-pagination",
    //     clickable: false,
    //     },
    //     breakpoints: {
    //         1920: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         },
    //         1028: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         },
    //         767: {
    //             slidesPerView: 1,
    //             spaceBetween: 20
    //         },
    //         480: {
    //             slidesPerView: 1,
    //             spaceBetween: 10
    //         },
    //         navigation: {
    //             nextEl: ".swiper-button-next",
    //             prevEl: ".swiper-button-prev",
    //         }
    //     }
    // });

    // clinet Slider
    var Swipes = new Swiper('.client .swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
        nextEl: '.fa-solid fa-right-long',
        prevEl: '.fa-solid fa-left-long',
    },
});


const navbar = document.querySelector('.navbar');
// const scrollBtn = document.querySelector('.scroll');

window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
};



$(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.scroll-top').fadeIn();
    } else {
        $('.scroll-top').fadeOut();
    }
});
//Click event to scroll to top
$('.scroll-top').click(function(){
    $('html, body').animate({scrollTop : 0},360);
    return false;
});