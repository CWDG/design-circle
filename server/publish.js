Meteor.publish("events", function() {
	return Events.find();
});

Meteor.publish("blogposts", function() {
	return BlogPosts.find();
});

Meteor.publish("Members",function() {
	return Team.find();
});

Meteor.startup(function() {
	BlogImages.allow({
		insert: function(userId, doc) { return true; },
		download: function(userId) { return true; },
		update: function(userId, doc) { return true; }
	});
});

Meteor.publish("blogimages", function() {
	return BlogImages.find();
});
