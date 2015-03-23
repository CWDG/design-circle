Schemas = {}
Events = new Mongo.Collection("events");

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

BlogPosts = new Mongo.Collection("blogPosts");

Schemas.BlogPosts = new SimpleSchema({
	title: {
		type: String,
		max: 80
	},
	subject: {
		type: String,
		max: 80
	},
	date: {
		type: Date,
		label: 'Date'
	},
	href: {
		type: String,
		max: 500
	}
});
BlogPosts.attachSchema(Schemas.BlogPosts);
