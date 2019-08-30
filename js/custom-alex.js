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

});