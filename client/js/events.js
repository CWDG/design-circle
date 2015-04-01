Meteor.subscribe("events");

Template.club_events.helpers({
	recentEvents: function() {
	return Events.find({}, {limit: 2}, {sort: {date: -1}});
}
});
