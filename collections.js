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
Events.attachSchema(Schemas.Events);
