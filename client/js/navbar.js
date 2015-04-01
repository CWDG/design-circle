Template.navbar.helpers({
	isAdmin: function() {
		return Meteor.user() && Meteor.user().roles && Meteor.user().roles.indexOf('admin') >= 0;
	}
});

Template.titlepage.rendered = function() {
	$('.fa-bars').click(function() {
		console.log("Bars clicked");
		$('body').toggleClass('menu-active');
	});
};
