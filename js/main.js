$(document).ready(function () {
    
    //Удаление hover dropdown на мобильных устройтсвах
    function checkWidth() {
        let windowSize = $(window).width();
        if (windowSize <= 991) {
            $('li').removeClass('dropdown').addClass('nav-link');
        }   
    }
    // Проверка ширины
    checkWidth();
    // Бинд
    $(window).resize(checkWidth);

// Слайдер с купонами (главная страница)
    $('.sale-card-slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

// Слайдер с фото магазина (главная)
    $('.our-shop-slider').slick({
        centerMode: true,
        slidesToShow: 2,
        cssEase: 'linear',
        variableWidth: true,
        infinite: true,
        dots: true,
        // touchMove: true,
        arrows: true,
        prevArrow: '<button class="slick-prev"> < </button>',
        nextArrow: '<button class="slick-next"> > </button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    
// Слайдер продукта (детальная страница)
    $('.cart-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // dots: true,
        fade: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
            }
        }]
    });

    $('.cart-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.cart-slider-for',
        verticalSwiping: true,
        arrows: false,
        dots: false,
        focusOnSelect: true,
        vertical: true,
    });

});



























const pressed =[];
const secretCode = 'irina';
window.addEventListener('keyup', event => {
    // console.log(event.key);
    pressed.push(event.key);
    // console.log(pressed);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)) {
        // console.log('SECREEET!!!');
        cornify_add();
    }
});
