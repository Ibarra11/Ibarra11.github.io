$('.js--section-about').waypoint(function(direction){
    if(direction == "down" ){
        $('nav').addClass('fixed-top nav-transparent');
        $('.navbar').css({"padding-top": "13px", "padding-bottom": "13px"});
    }
    else{
        $('nav').removeClass('fixed-top nav-transparent');
        $('.navbar').css({'padding-top': '25px', 'padding-bottom': '25px' });
    }
}, {offset: '60px'});


// Smoot Scroll Effect
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top -30;

	$("body, html").animate({
		scrollTop: position
	}, {duration: 900} );
});