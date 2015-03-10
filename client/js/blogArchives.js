Session.setDefault('loadBlogArchives', false);
  console.log(Session.get('loadBlogArchives'));

  Template.blog.events({
    'click #blogArchivesLink': function () {
      console.log('clicked blog archives link');
      return Session.set('loadBlogArchives', true);
    }
  });

  Template.blogLanding.helpers({
    loadBlogArchives: function () {
      console.log(Session.get('loadBlogArchives'));
      //$('.blogLanding').hide("slide", { direction: "left" }, 500, function() {
      $('.blogLanding').fadeOut('fast', function() {
        $('.blogArchives').show("slide", { direction: "right" }, 500);
      });
      return Session.get('loadBlogArchives');
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
        return 'Blog Archives';
      }
    }
  });

  Template.blogArchives.rendered = function() {
    $('.blogArchives').hide();
  }


  Template.blogArchives.helpers({
    blogPosts: function() {
      console.log(BlogPosts.find({}).fetch().length);
      return BlogPosts.find({}, {limit: 5}, {sort: {date: -1}});
    }
  });
