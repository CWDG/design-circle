Template.club_events.recentEvents = function() {
	return Events.find({}, {limit: 2}, {sort: {date: -1}});
};
