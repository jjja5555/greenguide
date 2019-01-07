// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
    	var $anchor = $(this);
    	$('html, body').stop().animate({
    		scrollTop: ($($anchor.attr('href')).offset().top - 50)
    	}, 1250, 'easeInOutExpo');
    	event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
    	target: '.navbar-fixed-top',
    	offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
    	$('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
    	offset: {
    		top: 100
    	}
    })

})(jQuery); // End of use strict


var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale('+scale+')',
				'position': 'absolute'
			});
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'position': 'unset', 'opacity': opacity});
		},
		duration: 800,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})


$(".oaRating-btn").click(function(event){
	$(".oaRating-btn").css("border", "none")
	let value = ($(this).html());
	$(this).css("border", "2px solid black")
	$("#rating").text(value);
	event.preventDefault();
	switch(value) {
		case "-3":
		$("#yRating-expla").text("Serious pollution! I can't breath! Serious smoke and the air is harmful to health. Water resource is dirty and smelly with strange color and all the fishes are dead. Untreated waste dump are everywhere. PM2.5 > 300");
		break;
		case "-2":
		$("#yRating-expla").text("Too Bad! Air quality is very bad and unhealthy. Water resource is polluted with untreated waste water. Most of the fishes are dead. PM2.5 200-300");
		break;
		case "-1":
		$("#yRating-expla").text("Not good! Air quality is bad and everyone is starting to experience health effects. Water resource is dirty. PM2.5 150-200");
		break;
		case "0":
		$("#yRating-expla").text("So-so! Air quality is so-so. Water resource is polluted. PM2.5 100-150");
		break;
		case "+1":
		$("#yRating-expla").text("Air quality is Ok! Waste water is treated before being released to water resource. PM2.5 50-100");
		break;
		case "+2":
		$("#yRating-expla").text("Good environmental management! Air quality is good and the water resource is clean with fish. PM2.5< 50");
		break;
		case "+3":
		$("#yRating-expla").text("Great environmental management! Air quality is awesome and it is a joy just breathing. Water resource is clean and there is good ecosystems around it.  PM2.5 < 30");
		break;
		default:
		$("#yRating-expla").text("");
	}
})

//Hide or show form 
function hideWaterIssues(){
	$('#water-issue').css("display", "none")
}

function showWaterIssues(){
	$('#water-issue').css("display", "block")
}

function hideAirIssues(){
	$('#air-issue').css("display", "none")
}

function showAirIssues(){
	$('#air-issue').css("display", "block")
}

function hideSolidWasteIssues(){
	$('#sw-issue').css("display", "none")
}

function showSolidWasteIssues(){
	$('#sw-issue').css("display", "block")
}

function showIndicateFloat(){
	$('#yFloat').css("display", "block")
}

function hideIndicateFloat(){
	$('#yFloat').css("display", "none")
}

function showIndicateSmoke(){
	$('#ySmoke').css("display", "block")
}

function hideIndicateSmoke(){
	$('#ySmoke').css("display", "none")
}


$(".turb-button").click(function(event){
	$(".turb-button").removeClass("turb-button-red");
	$(event.target).addClass("turb-button-red")
})

$('[data-toggle="popover"]').popover({
	container: 'body',
	html: true,
	placement: 'auto',
	trigger: 'hover',
	content: function() {
		return '<img style="width: 100%" src="../img/portfolio/turbidity-sample.jpg">'
	}
});


