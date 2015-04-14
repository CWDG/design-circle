Meteor.subscribe("events");

Template.club_events.helpers({
	recentEvents: function() {
		return Events.find({}, {limit: 2, sort: {date: -1}});
	}
});

Template.calendar.helpers({
	calendarOptions: function() {
		return {
			googleCalendarApiKey: "AIzaSyDb0rYc_N4TzrfE-i19ftuBnt8DVyz0J30",
			events: {
				googleCalendarId: "ohiostatedesigncircle@gmail.com",
				className: 'gcal-event'
			}
		}
	}
});
