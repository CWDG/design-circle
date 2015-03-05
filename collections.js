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
