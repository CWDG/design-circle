Meteor.publish("events", function() {
	return Events.find();
});

Meteor.publish("blogposts", function() {
	return BlogPosts.find();
});
