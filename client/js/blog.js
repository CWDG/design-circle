Meteor.subscribe("blogposts");
Meteor.subscribe("images");



Template.blog.helpers({
    recentBlogPosts: function() {
        return BlogPosts.find({}, {sort: {date: -1}});
    },
    getBlogPostImage: function(imageId) {
      if (Images.findOne(imageId) !== undefined) {
        return Images.findOne(imageId).url();
      }
    }
});

Template.blog.rendered = function() {

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
