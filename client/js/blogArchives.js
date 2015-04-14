Meteor.subscribe("blogposts");
Meteor.subscribe("images");

Template.blog.helpers({
    recentBlogPosts: function() {
        return BlogPosts.find({}, {sort: {date: -1}});
    },
    getBlogPostImage: function(imageId) {
        return Images.findOne(imageId).url();
    }
});
