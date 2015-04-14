Meteor.subscribe("blogposts");

Template.blogArchive.helpers({
    blogPosts: function() {
        return BlogPosts.find({}, {limit: 7}, {sort: {date: -1}});
    }
});
