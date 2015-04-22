Meteor.publish("events", function() {
	return Events.find();
});

Meteor.publish("blogposts", function() {
	return BlogPosts.find();
});

Meteor.publish("Members",function() {
	return Team.find();
});

Meteor.publish('images', function() {
  return Images.find();
});

Meteor.publish("about",function() {
	return About.find();
});
