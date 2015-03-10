Events = new Mongo.Collection("events");
if (Events.find().fetch().length == 0) {
	Events.insert({
		title: "Meeting",
		date: new Date(),
		time: "8:00",
		description: "Just a regular ol' meeting."
	});
	Events.insert({
		title: "Partai",
		date: new Date(),
		time: "5:00",
		description: "We are the designas who likea to partai"
	});
}

BlogPosts = new Mongo.Collection("blogPosts");
/*if (BlogPosts.find().fetch().length == 0) {   <<< always evaluates to true because the template is not rendered.
	console.log(BlogPosts.find().fetch().length)  <<< leave commented out and delete when blog entry submission feature is implemented in admin interface.
	BlogPosts.insert({
		title: "First Blog Post!",
		date: new Date(),
		subject: "Announcement"
	});
	BlogPosts.insert({
		title: "Learn to use GIMP for graphics editing on a budget!",
		date: new Date(),
		subject: "Tutorial"
	});
	BlogPosts.insert({
		title: "Symmetry is your friend",
		date: new Date(),
		subject: "Opinion"
	});
}*/
