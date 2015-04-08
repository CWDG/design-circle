Meteor.publish("events", function() {
	return Events.find();
});

Meteor.publish("blogposts", function() {
	return BlogPosts.find();
});

Meteor.publish("Members",function() {
	return Team.find();
});

Meteor.publish("blogimages", function() {
	return BlogImages.find();
});
