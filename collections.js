Schemas = {}
Events = new Mongo.Collection("events");
<<<<<<< HEAD

Schemas.Events = new SimpleSchema({
	title: {
		type: String,
		max: 60
	},
	description: {
		type: String,
		autoform: {
			rows: 5
		}
	},
	date: {
		type: Date,
		label: 'Date'
	}
});
Events.attachSchema(Schemas.Events);
=======
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
/*if (BlogPosts.find().fetch().length == 0) {
	console.log(BlogPosts.find().fetch().length)
	BlogPosts.insert({
		title: "First Blog Post!",
		date: new Date(),
		subject: "Announcement",
		href:'http://cdn.meme.am/instances/400x/53854309.jpg'
	});
	BlogPosts.insert({
		title: "Learn to use GIMP for graphics editing on a budget!",
		date: new Date(),
		subject: "Tutorial",
		href:'http://www.gimp.org/'
	});
	BlogPosts.insert({
		title: "Symmetry is your friend",
		date: new Date(),
		subject: "Opinion",
		href:'http://en.wikipedia.org/wiki/Symmetry'
	});
	BlogPosts.insert({
		title: "10 things to keep in mind when designing",
		date: new Date(),
		subject:'Design Tips',
		href:'http://treasure.diylol.com/uploads/post/image/554040/resized_grandma-finds-the-internet-meme-generator-they-call-this-next-gen-design-679007.jpg'
	});
	BlogPosts.insert({
		title: "I <3 bacon",
		date: new Date(),
		subject:'Announcement',
		href:'http://bacontoday.com/wp-content/uploads/2013/06/vpq.jpg'
	});

	BlogPosts.insert({
		title: "More Stuff",
		date: new Date(),
		subject: "Goes here",
		href:'http://venturebeat.com/wp-content/uploads/2012/11/buy-more-stuff.jpg'
	});
	BlogPosts.insert({
		title: "More Stuff",
		date: new Date(),
		subject: "Goes here",
		href:'http://venturebeat.com/wp-content/uploads/2012/11/buy-more-stuff.jpg'
	});
}*/
>>>>>>> master
