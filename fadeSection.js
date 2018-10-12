
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
	}
	else {
		// The element is not visible, do something else
		console.log("I don't see skillbar");
	}
	});

	$(window).scroll(function() {
	var top_of_element = $("#sectionTopInfo").offset().top;
	var bottom_of_element = $("#sectionTopInfo").offset().top + $("#sectionTopInfo").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();

	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		// The element is visible, do something
		$("#educationBlock").addClass("fadeInEffect5");
		$("#awardsBlock").addClass("fadeInEffect7");
		$("#experienceBlock").addClass("fadeInEffect9");
	}
	else {
		// The element is not visible, do something else
		console.log("I don't see infobar");
	}
	});

	$(window).scroll(function() {
	var top_of_element = $("#projectBoxes1").offset().top;
	var bottom_of_element = $("#projectBoxes1").offset().top + $("#projectBoxes1").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();

	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		// The element is visible, do something
		console.log("PB1");
		$(".projectBoxes11").addClass("fadeInEffect12");
		$(".projectBoxes12").addClass("fadeInEffect5");
		$(".projectBoxes13").addClass("fadeInEffect5");
		$(".projectBoxes14").addClass("fadeInEffect12");
	}
	else {
		// The element is not visible, do something else
		console.log("I don't see infobar");
	}
	});

	$(window).scroll(function() {
	var top_of_element = $("#projectBoxes2").offset().top;
	var bottom_of_element = $("#projectBoxes2").offset().top + $("#projectBoxes2").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();

	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		// The element is visible, do something
		console.log("PB2");
		$(".projectBoxes21").addClass("fadeInEffect12");
		$(".projectBoxes22").addClass("fadeInEffect5");
		$(".projectBoxes23").addClass("fadeInEffect5");
		$(".projectBoxes24").addClass("fadeInEffect12");
	}
	else {
		// The element is not visible, do something else
		console.log("I don't see infobar");
	}
	});

	$(window).scroll(function() {
	var top_of_element = $("#projectBoxes3").offset().top;
	var bottom_of_element = $("#projectBoxes3").offset().top + $("#projectBoxes3").outerHeight();
	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
	var top_of_screen = $(window).scrollTop();

	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
		// The element is visible, do something
		console.log("PB3");
		$(".projectBoxes31").addClass("fadeInEffect14");
		$(".projectBoxes32").addClass("fadeInEffect7");
		$(".projectBoxes33").addClass("fadeInEffect7");
		$(".projectBoxes34").addClass("fadeInEffect14");
	}
	else {
		// The element is not visible, do something else
		console.log("I don't see infobar");
	}
	});
