if ($('.section-plans').length > 0) {
    var plansNav = $('.plans-nav'),
        navOffset = plansNav.offset(),
        navOffsetTop = navOffset.top;

    var plansListHeight = $('.plans-list').height();
    var windowScrollTop = $(window).scrollTop();

    var classicPlan = $('#classic-plan'),
        premiumPlan = $('#premium-plan'),
        deluxePlan = $('#deluxe-plan');
    var classicPlanOffset = classicPlan.offset(),
        premiumPlanOffset = premiumPlan.offset(),
        deluxePlanOffset = deluxePlan.offset();

    //console.log('navOffsetTop = ' + navOffsetTop);
    //console.log('windowScrollTop = ' + windowScrollTop);

}


$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	}
});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */

	$(window).scroll(function() {

        if ($('.section-plans').length > 0 && $(window).width() <= '768'){
            windowScrollTop = $(window).scrollTop();
            setPlanNavState();
            setMenuItemState();
        }

    });

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */

	$(window).resize(function() {
        if ($('.section-plans').length > 0) {
            setPlanNavState();

            if($(window).width() > '768'){
                plansNav.removeClass('fixed');
            }
        }


	});




$(function(){

    $('.section-hero .btn').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 500);
        return false;
    });

    $('.plans-nav a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        if($(window).width() <= '768') {
            $('html, body').animate({scrollTop: $(target).offset().top-45}, 500);
        }
        return false;
    });

    var heroSwiper = new Swiper ('.hero-swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

	$('.faq-question').on('click', function(){
	    $(this).find('.icon-faq').toggleClass('show');
	    $(this).next().slideToggle();
    });

    if ($('.section-plans').length > 0 && $(window).width() <= '768'){
        setPlanNavState();
        setMenuItemState();
    }


    $('.dot').on('click', function(){
        var parentoffset = $(this).parents('[id*="plan"]');
        $('html, body').animate({scrollTop: $(parentoffset).offset().top}, 500);
        return false;
    });



});

function setPlanNavState(){
    if((windowScrollTop >= navOffsetTop -100 ) && (windowScrollTop < (navOffsetTop + plansListHeight + 55))) {
        $('.section-plans').addClass('no-transform'); //'transform + fixed' issue fix
        plansNav.addClass('fixed');
    } else {
        plansNav.removeClass('fixed');
        $('.section-plans').removeClass('no-transform');
    }
}
function setMenuItemState(){
    if(windowScrollTop >= classicPlanOffset.top - 250) plansNav.find('a[href*="classic-plan"]').addClass('current').siblings().removeClass('current');
    if(windowScrollTop >= premiumPlanOffset.top - 250) plansNav.find('a[href*="premium-plan"]').addClass('current').siblings().removeClass('current');
    if(windowScrollTop >= deluxePlanOffset.top - 250) plansNav.find('a[href*="deluxe-plan"]').addClass('current').siblings().removeClass('current');
}