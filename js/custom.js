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

        		
	});




$(function(){

    /*
	$('.button-nav').click(function(){
		$(this).toggleClass('active');
		$('.main-nav-list').slideToggle(); 
		return false;
	});
    */

    $('.plans-nav a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        if($(window).width() <= '768') {
            $('html, body').animate({scrollTop: $(target).offset().top-45}, 500);
        }
        $(this).addClass('active').siblings().removeClass('active');
        $('.plans-list').children().removeClass('active');
        $('.plans-list').find(target).addClass('active');
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

});

function setPlanNavState(){
    (windowScrollTop >= navOffsetTop) && (windowScrollTop < (navOffsetTop + plansListHeight + 55)) ? plansNav.addClass('fixed') : plansNav.removeClass('fixed');
}
function setMenuItemState(){
    if(windowScrollTop >= classicPlanOffset.top - 55) plansNav.find('a[href*="classic-plan"]').addClass('current').siblings().removeClass('current');
    if(windowScrollTop >= premiumPlanOffset.top - 55) plansNav.find('a[href*="premium-plan"]').addClass('current').siblings().removeClass('current');
    if(windowScrollTop >= deluxePlanOffset.top - 55) plansNav.find('a[href*="deluxe-plan"]').addClass('current').siblings().removeClass('current');
}