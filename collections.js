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
	picture: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Images'
								}
							},
        label: 'Choose Image'
			}
});
BlogPosts.attachSchema(Schemas.BlogPosts);

Team = new Mongo.Collection("Members");

Schemas.Team = new SimpleSchema({
        name: {
                type: String,
                max: 60
        },
        position: {
                type: String,
             	max:15
        },
        major: {
                type: String,
                max:50
        }
});
Team.attachSchema(Schemas.Team);

Images = new FS.Collection("images", {stores: [new FS.Store.GridFS("images", {})]});

Images.allow({
<<<<<<< HEAD
  insert: function (userId, doc) {
 		return true
		},
  download: function (userId) {
	  return true
=======
  insert: function(userId, doc) {
    return true;
	},
  download: function(userId) {
    return true;
>>>>>>> f9947c54afbfface95d9e070acd41583ec9463fd
	}
});
