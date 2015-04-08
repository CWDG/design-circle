BlogImages = new FS.Collection("images", {
	stores: [new FS.Store.GridFS("images", {})]
});

BlogImages.allow({
	insert: function(userId, doc) { return true; },
	download: function(userId) { return true; }
});
