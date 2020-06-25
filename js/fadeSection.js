
//this function runs every time you are scrolling
	//Fade Affects for all the content
	$(window).scroll(function() {
		var top_of_element = $("#skilBar").offset().top;
		var bottom_of_element = $("#skilBar").offset().top + $("#skilBar").outerHeight();
		var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
		var top_of_screen = $(window).scrollTop();

		if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
			// The element is visible, do something
			$("#percentBars").addClass("fadeInEffect7");
			$(".eduSectionText").addClass("fadeInEffect5");
			$(".awardSectionText").addClass("fadeInEffect7");
			$(".expSectionText").addClass("fadeInEffect9")
		}
	});

	// $(window).scroll(function() {
	// 	var top_of_element = $("#projectBoxes1");
	// 	var top_of_element = $("#projectBoxes1").offset().top;
	// 	var bottom_of_element = $("#projectBoxes1").offset().top + $("#projectBoxes1").outerHeight();
	// 	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	// 	var top_of_screen = $(window).scrollTop();
	//
	// 	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	// 		// The element is visible, do something
	// 		$(".projectBoxes11").addClass("fadeInEffect12");
	// 		$(".projectBoxes12").addClass("fadeInEffect5");
	// 		$(".projectBoxes13").addClass("fadeInEffect5");
	// 		$(".projectBoxes14").addClass("fadeInEffect12");
	// 	}
	// });
	//
	// $(window).scroll(function() {
	// 	var top_of_element = $("#projectBoxes2").offset().top;
	// 	var bottom_of_element = $("#projectBoxes2").offset().top + $("#projectBoxes2").outerHeight();
	// 	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	// 	var top_of_screen = $(window).scrollTop();
	//
	// 	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
	// 		// The element is visible, do something
	// 		$(".projectBoxes21").addClass("fadeInEffect12");
	// 		$(".projectBoxes22").addClass("fadeInEffect5");
	// 		$(".projectBoxes23").addClass("fadeInEffect5");
	// 		$(".projectBoxes24").addClass("fadeInEffect12");
	// 	}
	// });
