Meteor.publish("events", function() {
	return Events.find();
});

Meteor.publish("blogPosts", function(limit) {
	if (limit > BlogPosts.find().count()) {
    limit = 0;
  }

  return BlogPosts.find({ }, { limit: limit });
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
