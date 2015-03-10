Session.setDefault('loadBlogArchives', false);
  console.log(Session.get('loadBlogArchives'));

  Template.blog.events({
    'click #blogArchivesLink': function () {
      console.log('clicked blog archives link');
      return Session.set('loadBlogArchives', true);
    }
  });

  Template.blog.helpers({
    loadBlogArchives: function () {
      console.log(Session.get('loadBlogArchives'));
      return Session.get('loadBlogArchives');
    }
  });
