Template.navbar.helpers({
	isAdmin: function() {
		return Meteor.user() && Meteor.user().roles && Meteor.user().roles.indexOf('admin') >= 0;
	}
});
