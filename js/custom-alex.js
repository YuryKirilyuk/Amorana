$(document).ready(function(){

    if($('.js-dots').length > 0){
        let currentDot,
            dotsLength;

        $('.js-showDot').on('click', function(e){
            e.preventDefault();

            let el = $(this),
                dots = el.closest('.js-dots'),
                dot = el.closest('.js-dotsItem'),
                dotBg = $('.js-plansTrBg'),
                dHeight = dots.height(),
                dWidth = dots.width();

            currentDot = dot;

            let dotBgX = -((6000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2)),
                dotBgY = -((3000 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));

            if($(window).width() < 550){
                dotBgX = -((3000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2));
                dotBgY = -((1500 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));
            }

            dots.find('.dots-item').removeClass('active');
            dot.addClass('active');
            dots.addClass('active');

            dotBg.css({backgroundPosition: dotBgX + 'px ' + dotBgY + 'px'});

            $(window).resize(function(){
                dHeight = dots.height();
                dWidth = dots.width();
                dotBgX = -((6000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2));
                dotBgY = -((3000 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));

                if($(window).width() < 550){
                    dotBgX = -((3000 / 2) - (dWidth / 2) - (el.offset().left - (dWidth / 2)) - (el.outerWidth() / 2));
                    dotBgY = -((1500 / 2) - (dHeight / 2) - (el.offset().top - dots.offset().top - (dHeight / 2)) - (el.outerHeight() / 2));
                }

                dotBg.css({backgroundPosition: dotBgX + 'px ' + dotBgY + 'px'});
            });
        });

        $('body').on('click', '.js-close', function(e){
            e.preventDefault();

            const dots = $(this).closest('.js-dots');

            dots.find('.js-dotsItem').removeClass('active');
            dots.removeClass('active');

        }).on('click', '.js-dotNav', function(e){

            e.preventDefault();

            const dotsList = $(this).closest('.js-dotsList');
            const dot = dotsList.find('.js-dotsItem');

            let dir = $(this).data('nav'),
                currDotI = currentDot.index();

            dotsLength = dotsList.find('.js-dotsItem').length;

            dot.removeClass('active');

            if(dir === 'next'){
                if(currDotI < dotsLength-1){
                    dot.eq(currDotI + 1).find('.js-showDot').click();
                } else {
                    dot.eq(0).find('.js-showDot').click();
                }
            } else {
                if(currDotI === 0){
                    dot.eq(dotsLength-1).find('.js-showDot').click();
                } else {
                    dot.eq(currDotI-1).find('.js-showDot').click();
                }
            }
        });

        $('body').click(function (event){
            const dots = $('.js-dots');

            if(!$(event.target).closest('.js-dotsItem').length && !$(event.target).is('.js-dotsItem')) {
                dots.find('.js-dotsItem').removeClass('active');
                dots.removeClass('active');
            }
        });
    }

    AOS.init({
        mirror: false,
        once: true
    });

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