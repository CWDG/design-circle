Images = new FS.Collection("images", {stores: [new FS.Store.GridFS("images", {})]});

Images.allow({
  insert: function(userId, doc) {
    return true;
	},
  download: function(userId) {
    return true;
	},
	update: function(userId, doc) {
		return true;
	},
	remove: function (userId, doc) {
	return true;
 }
});

Schemas = {}

About= new Mongo.Collection("about");

Schemas.About = new SimpleSchema({ 
	title: {
		type: String,
		max: 1000
	},
	date: {
		type: Date,
		label: 'Date',
		autoValue: function() {
	         if( this.isInsert ) {
        	  return new Date()
      		  }
    	         }
	}
});

About.attachSchema(Schemas.About);

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
		label: 'Date',
    autoValue: function() {
      if( this.isInsert ) {
          return new Date()
      }
    }
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
		label: 'Date',
    autoValue: function() {
      if( this.isInsert ) {
          return new Date()
      }
    }
	},
	picture: {
    type: String,
      autoform: {
        afFieldInput: {
          type: 'fileUpload',
            collection: 'Images'
					}
			},
      label: 'Choose Image',
      optional: true
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
Team.attachSchema(Schemas.Team);
