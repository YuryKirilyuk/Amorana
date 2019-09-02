$(document).ready(function(){

    if($('.js-dots').length > 0){
        $('.js-showDot').on('click', function(e){
            e.preventDefault();

            let el = $(this),
                dots = el.closest('.js-dots'),
                dot = el.closest('.js-dotsItem'),
                dotBg = $('.js-plansTrBg'),
                dHeight = dots.height(),
                dWidth = dots.width();

            let dotBgX = -((6000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2)),
                dotBgY = -((3000 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));

            dots.find('.dots-item').removeClass('active');
            dot.addClass('active');
            dots.addClass('active');

            dotBg.css({backgroundPosition: dotBgX + 'px ' + dotBgY + 'px'});

            $(window).resize(function(){
                dHeight = dots.height();
                dWidth = dots.width();
                dotBgX = -((6000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2));
                    dotBgY = -((3000 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));

                dotBg.css({backgroundPosition: dotBgX + 'px ' + dotBgY + 'px'});
            });
        });

        $('body').on('click', '.js-close', function(e){
            e.preventDefault();

            const dots = $(this).closest('.js-dots');

            dots.find('.js-dotsItem').removeClass('active');
            dots.removeClass('active');
        });
    }

    AOS.init({
        mirror: false,
        once: true
    });
    /*AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });*/

    $(".js-video").fancybox({
        helpers: {
            media: true
        },/*
        fullScreen : {
            autoStart: true
        },*/
        media : {
            youtube : {
                params : {
                    autoplay : 1,
                    fullscreen: 1
                }
            }
        }
    });

});

$(window).on('load', function () {
    AOS.refresh();
});