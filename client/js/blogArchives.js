Meteor.subscribe("blogposts");
Meteor.subscribe("images");

Session.setDefault('loadBlogArchive', false);

  Template.blog.events({
    'click #blogArchiveLink': function () {
      return Session.set('loadBlogArchive', true);
    }
  });

  Template.blogLanding.helpers({
    archiveLinkText: function() {
      if(Session.get('loadBlogArchive') == false) {
        return 'Archive';
      }
      else {
        return 'Back';
      }
    },
    blogSectionHeader: function() {
      if(Session.get('loadBlogArchive') == false) {
        return 'Blog';
      }
      else {
        return 'Blog';
      }
    },
    loadBlogArchive: function () {
      $('.blogLanding').fadeOut('fast', function() {
        $('.blogArchive').show("slide", { direction: "right" }, 400);
        $('#blogArchiveHeader').fadeIn('slow');
      });
      return Session.get('loadBlogArchive');
    },
    recentBlogPosts: function() {
      return BlogPosts.find({}, {limit: 2, sort: {date: -1}});
    },
    blogImageView: function(picture) {
      //console.log(picture)
      console.log(Images.findOne(picture));
      return Images.findOne(picture).url;
    }
  });

  Template.blogArchive.rendered = function() {
    $('.blogArchive, #blogArchiveHeader').hide();
  }

  Template.blogArchive.helpers({
    blogPosts: function() {
      return BlogPosts.find({}, {limit: 7}, {sort: {date: -1}});
    }
  });
