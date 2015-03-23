Template.navbar.events({
	"click .brand_image": function() {
		$.scrollify("move", 0);
	},
	"click #about-link": function() {
		$.scrollify("move", 1)
	},
	"click #events-link": function() {
		$.scrollify("move", 3)
	},
	"click #news-link": function() {
		$.scrollify("move", 4)
	},
	"click #contact-link": function() {
		$.scrollify("move", 5)
	}
});

Template.navbar.helpers({
	isAdmin: function() {
		return Meteor.user() && Meteor.user().roles.indexOf('admin') >= 0;
	}
});
