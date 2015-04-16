Meteor.subscribe("blogPosts");
Meteor.subscribe("images");

incrementLimit = function(inc) {
  newLimit = Session.get('limit') + inc;
  Session.set('limit', newLimit);
}

Template.posts.created = function() {
  Session.setDefault('limit', 2);

  Deps.autorun(function() {
    Meteor.subscribe('blogPosts', Session.get('limit'));
  });
}

Template.posts.rendered = function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      incrementLimit();
    }
  });
}

Template.posts.events({
  'click .load-more-posts': function(evt) {
    incrementLimit(2);
  }
});

Template.posts.helpers({
  recentBlogPosts: function() {
    return BlogPosts.find({ }, { limit: Session.get('limit'), sort: {date: -1} });
  },
  getBlogPostImage: function(imageId) {
    if (Images.findOne(imageId) !== undefined) {
      return Images.findOne(imageId).url();
    }
  }
});

/////////////////////////////////////////

/*Template.posts.helpers({
    recentBlogPosts: function() {
        return BlogPosts.find({}, {sort: {date: -1}});
    },
    getBlogPostImage: function(imageId) {
      if (Images.findOne(imageId) !== undefined) {
        return Images.findOne(imageId).url();
      }
    }
});*/

Template.posts.rendered = function() {

  //height of collapsed slider
  var slideHeight = 110;

  $(".blogPostContainer").each(function() {

    //Date and blog post text
    var $blogInfo = $(this).children(".blogInfo");

    //Height of blog info div
    var defHeight = $blogInfo.height();

    //debugging
    console.log('defHeight:', defHeight);
    console.log('slideHeight:', slideHeight);

    if (defHeight >= slideHeight) {

      //set blog info height to collapsed height
      $blogInfo.css("height", slideHeight + "px");

        //read more link
        var $readMore = $(this).find(".s-link");  //todo: should probably append this link conditionally to avoid useless read more links on very short blog posts
        console.log('readMore:', $readMore.text());

        //bind click event to read more link
        $readMore.bind('click', function(event) {
          var curHeight = $blogInfo.height();
          console.log('curHeight:', $blogInfo.height());
          console.log('clicked read more!');
            if (curHeight <= slideHeight) { //expand
                $blogInfo.animate({
                    height: defHeight
                }, "slow", 'easeOutElastic');
                $(this).text("Close");
            } else { //collapse
                $blogInfo.animate({
                    height: slideHeight
                }, "slow", 'easeOutElastic');
                $(this).text("Read More");
            }
            return false;
        });
    }
  });
}
