Meteor.subscribe("blogposts");
Meteor.subscribe("images");

Template.blogLanding.helpers({
    recentBlogPosts: function() {
        return BlogPosts.find({}, {limit: 2, sort: {date: -1}});
    },
    getBlogPostImage: function(imageId) {
        return Images.findOne(imageId).url();
    }
});

Template.blogArchive.helpers({
    blogPosts: function() {
        return BlogPosts.find({}, {limit: 7}, {sort: {date: -1}});
    }
});
