$(document).ready(function(){
	$('.bxslider2').bxSlider({
		minSlides: 1,
		maxSlides: 6,
		slideWidth: 100,
		slideMargin: 10
	});
});

$(document).ready(function(){
	$('.bxslider1').bxSlider({
		pagerCustom: '#bx-pager'
	});
});

$(document).ready(function(){
	$('.bxslider0').bxSlider({
		auto: true,
		pause: 6000
	});
});