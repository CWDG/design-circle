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

/*
Template.posts.rendered = function() {

}
*/

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
  },
  applySlider: function() {

    function doApplySlider() {

      var slideHeight = 110; //height of collapsed slider

      $(".blogPostContainer").each(function() { //TODO: figure out a way to run this ONLY on newly loaded blog posts instead of all of them

        var $blogInfo = $(this).children(".blogInfo");
        var defHeight = $blogInfo.height();
        var $readMoreLink = $(this).find(".s-link");  //TODO: should probably append this link conditionally to avoid useless read more links on very short blog posts

        console.log('defHeight:', defHeight);
        console.log('slideHeight:', slideHeight);

        if (defHeight >= slideHeight) {

          //set blog info height to collapsed height
          $blogInfo.css("height", slideHeight + "px");

          //bind click event to read more link
          $readMoreLink.bind('click', function(event) {

            var curHeight = $blogInfo.height();
            console.log('curHeight:', $blogInfo.height());

              if (curHeight <= slideHeight) { //expand
                  $blogInfo.animate({
                      height: defHeight
                  }, 'slow', 'easeOutQuart');
                  $(this).parent().find('.slider-gradient').fadeOut('slow');
                  $(this).text("Close");
              }

              else { //collapse
                  $blogInfo.animate({
                      height: slideHeight
                  }, 'slow', 'easeOutQuart');
                  $(this).parent().find('.slider-gradient').fadeIn('slow');
                  $(this).text("Read More");
              }

              return false;
            });
          }
        });
      }

      setTimeout(doApplySlider, 500); //delay execution to ensure the DOM is fully updated
  }

});
