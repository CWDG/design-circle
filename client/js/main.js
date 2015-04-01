Template.main.rendered = function() {
	$(".section").height($(window).height());
	$('#content').scrollsnap({
		snaps: '.section',
		proximity: 400,
		easing: 'easeOutBack'
	});
	console.log("Scrollsnap activated");
}
