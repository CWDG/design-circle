Template.main.rendered = function() {

      var currentSection;
      var viewingContent;
      var headerTop = $('body').position().top;
      var contentTop;
      var currentPosY;

      function showDownArrows() {
        $('.down').delay(800).animate({
          opacity: 1
          }, 'slow');
      }

      function hideDownArrows() {
        $('.down').animate({ opacity: 0 }, 'slow');
      }

      function blurElement(element, size, blurDuration, fadeValue) {
       var filterVal = 'blur(' + size + 'px)';
       $(element)
           .css('filter', filterVal)
           .css('webkitFilter', filterVal)
           .css('mozFilter', filterVal)
           .css('oFilter', filterVal)
           .css('msFilter', filterVal)
           .css('transition', 'all 0.5s ease-out')
           .css('-webkit-transition', 'all 0.' + blurDuration + 's ease-out')
           .css('-moz-transition', 'all 0.' + blurDuration + 's ease-out')
           .css('-o-transition', 'all 0.' + blurDuration + 's ease-out')
           .css('opacity', fadeValue);
      }

      function parallax(selector, image_src, width) {
          $(selector).before("<div id='parallaxer'></div>")

          $('#parallaxer').css('height', '100vh');
          $('#parallaxer').css('position', 'fixed');
          $('#parallaxer').css('left', 0);
          $('#parallaxer').css('top', 0);
          $('#parallaxer').css('background', 'url(' + image_src + ') no-repeat');
          $('#parallaxer').css('background-size', 'cover');
          $('#parallaxer').css('background-position', 'center');
          $('#parallaxer').css('width', width);
          $('#parallaxer').css('z-index', '-100');

          $('a[href^=#]').on("click", function() {
              var total_distance = $(selector).width() - $(window).width();
              var section = $(this).attr('href');

              // Get location of selector
              var tOffset = $(section).position();
              var base = $("#penultimate-container").position().left;
              var sectLeft = (-base) + tOffset.left;
              var position = sectLeft;
              var fraction = position / total_distance;
              var overlap = $('#parallaxer').width() - $(window).width();

              $('#parallaxer').animate({
                left: -(overlap * fraction)
                }, 'slow', 'easeOutCirc');
              });

              var container_width = $(selector).width();
      }

    function autoScroll(){
      var selector = $(this).attr('href');

      // Get location of selector
      var tOffset = $(selector).position();
      var base = $("#penultimate-container").position().left;
      var sectLeft = (-base) + tOffset.left;
      var sectTop = tOffset.top;

      currentSection = selector;
      console.log('current section:', currentSection);

      //hide arrows before scrolling
      $('.down').css('opacity', 0);

      viewingContent = false;
      console.log('viewing content:', viewingContent);

      // Navigate
      $('html, body').animate({
          scrollLeft: sectLeft,
          scrollTop: sectTop
      }, 'slow', 'easeOutCirc', showDownArrows() );

      // Do not do default action
      return false;
    }

    function viewContent() {
      console.log("Down!");
      hideDownArrows();
      viewingContent = true;
      console.log('viewing content:', viewingContent);
      var new_top = $(this).parents(".section").children(".content-wrapper").position().top;
      $('html,body').animate({
          scrollTop: new_top
      }, 'slow');
    }

    /* -----old resize animation ------

    function repositionPage() {
      var selector = currentSection;
      // Get location of selector
      var tOffset = $(selector).position();
      var base = $("#penultimate-container").position().left;

      var sectLeft = (-base) + tOffset.left;

      //Get new position of content section (top border)
      contentTop = $('body').position().top + $(window).height();

      var blurred;

      if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 800);

      //User is viewing content of a section
      if( viewingContent ) {
        currentPosY = contentTop;

        //on initial resize (only do once)
        if(!blurred) {
          $('.resizeNotification').stop().fadeIn('fast');
          blurElement('.content-wrapper', 25, 0, .4);
          blurred = true;
        }

        setTimeout(function() { //timeout reduces lag
          //reposition, remove blur and resize notification
          $('html, body').stop(true, true).animate({
            scrollLeft: sectLeft,
            scrollTop: currentPosY
          }, 800, 'easeOutQuint', function() {
            blurElement('.content-wrapper', 0, 400, 1)
            blurred = false;
            });
        }, 400);


      }
      //User is viewing header section
      else {
        currentPosY = headerTop;
        //reposition
        $('html, body').stop(true, true).animate({
          scrollLeft: sectLeft,
          scrollTop: currentPosY
        }, 600, 'easeOutQuint');
      }
    }*/


    parallax('#penultimate-container', '/img/cat2.jpg', 3000);

    var sectionOrigLeft;
    var windowWidthStart;
    var currentSectionClassName;

    $(window).on('resize', function() {
              //recalculate top position of content
        contentTop = $('body').position().top + $(window).height();

        currentSectionClassName = currentSection.split('#')[1];
        var $section = $('.' + currentSectionClassName);
        var tOffset = $section.position();
        var base = $("#penultimate-container").position().left;

        if(tOffset.left !== 0) {
          sectionOrigLeft = (-base) + tOffset.left;
          windowWidthStart = $(window).width();
        }

        if( viewingContent ) {
          currentPosY = contentTop;
          $section.find('.header').hide();
        }
        else {
          currentPosY = headerTop;
        }

        //position current section inside the window and hide all other sections
        $('.section').each(function() {
          if( $(this).attr('class') !== $section.attr('class') ) {
            $(this).hide();
          }
          else {
            $(this).addClass('positionTopLeft');
          }
        });

        //trigger resize end event after 800ms of no change in window size
        if(this.resizeTO) clearTimeout(this.resizeTO);
          this.resizeTO = setTimeout(function() {
              $(this).trigger('resizeEnd');
          }, 800);


<<<<<<< HEAD
    $(".down").click(function() {
        var new_top = $(this).parents(".section").children(".content-wrapper").position().top;
        $('html,body').animate({
            scrollTop: new_top
        }, 'slow');
    })
=======

    }).bind('resizeEnd', function() {
      var windowWidthEnd = $(window).width();
      var deltaWindowWidth = windowWidthEnd - windowWidthStart;

      function sectIndex() {
        if (currentSection == '#about') {return 1}
        //team??
        else if( currentSection == '#events') { return 3 }
        else if( currentSection == '#blog' ) { return 4 }
        else if( currentSection == '#contact' ) { return 5 }
        else { return null }
      }

      //horizontal offset after resize equals the change in window width times the number of preceeding sections since the width of each section increases
      var deltaSectOffset = sectIndex()*deltaWindowWidth

      //display all sections and headers and remove resize positioning
      $('.header').show();
      $('.section').show().removeClass('positionTopLeft');

      //jump to new section position after restoration of all sections
      $('html, body')
        .scrollTop(currentPosY)
        .scrollLeft(sectionOrigLeft + deltaSectOffset);

   });

    $('a[href^=#]').on("click", autoScroll);

    $(".down").click(viewContent);
}

Template.resizeNotification.rendered = function() {

  $('.resizeNotification').hide().css('opacity', 1);

>>>>>>> 9f2c66980f51f651c67ad6076f030fc6ab172b48
}
