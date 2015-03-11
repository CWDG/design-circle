Session.setDefault('loadBlogArchives', false);

  Template.blog.events({
    'click #blogArchivesLink': function () {
      return Session.set('loadBlogArchives', true);
    }
  });

  Template.blogLanding.helpers({
    archiveLinkText: function() {
      if(Session.get('loadBlogArchives') == false) {
        return 'Archives';
      }
      else {
        return 'Back';
      }
    },
    blogSectionHeader: function() {
      if(Session.get('loadBlogArchives') == false) {
        return 'Blog';
      }
      else {
        return 'Blog';
      }
    },
    loadBlogArchives: function () {
      $('.blogLanding').fadeOut('fast', function() {
        $('.blogArchives').show("slide", { direction: "right" }, 400);
      });
      return Session.get('loadBlogArchives');
    },
    recentBlogPosts: function() {
      return BlogPosts.find({}, {limit: 2}, {sort: {date: -1}});
    }
  });

  Template.blogArchives.rendered = function() {
    $('.blogArchives').hide();
  }

  Template.blogArchives.helpers({
    blogPosts: function() {
      return BlogPosts.find({}, {limit: 7}, {sort: {date: -1}});
    }
  });
