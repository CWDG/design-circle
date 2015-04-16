Meteor.subscribe("about");

Template.aboutpage.helpers({
	latestAbout: function() {
	return About.find({},{limit: 1, sort: {date: -1, time: 1}});
}
});
