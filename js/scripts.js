$(window).on('load',function() { 
	//Preloader 
	$('#status').delay(300).fadeOut(); 
	$('#preloader').delay(300).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
});

GitHubActivity.feed({
	username: "joshuasturm",
	//repository: "your-repo", // optional
	selector: "#feed",
	limit: 5 // optional
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('[data-toggle="popover"]').popover()
});
