//= require "jquery"

var menuButton = $('.menu'),
    mainNav = $('.site-header .main-nav'),
    body = $('body'),
    scrollHeight,
    tickets = $('#tickets'),
    ticketsDist;

$( document ).ready(function() {

  // Copy Header for scroll

  $(".site-header").clone().appendTo('body').addClass("scroll-header").removeClass("site-header");

  // Menu Click
  $( "body" ).delegate( ".menu", "click", function(e) {
    e.preventDefault();
    if (body.hasClass("menu-open")){
      mainNav.fadeOut();
      body.removeClass("menu-open");
    } else {
      mainNav.fadeIn();
      body.addClass("menu-open");
    }
  });

  // Scroll Links
  $('a').click(function(){
    if (this.getAttribute("href").charAt(0) == "#") {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    }
  });

  // Mobile Ticket Links
  $(".main-nav ul li.nav-tickets a").click(function(e) {
    e.preventDefault();
    mainNav.fadeOut();
    body.removeClass("menu-open");
  });



  $(window).scroll(function () { 
    
    scrollHeight = 150;
    if( $(window).scrollTop() > scrollHeight ) {
      $("body").addClass("scroll");
    } else {
      $("body").removeClass("scroll");
    }

    if ($(window).width() > 768 ) {
      windowScroll = $(window).scrollTop();
      $('.speaker-list').css({transform: 'translateY(-' + windowScroll/5 + 'px)'})
      $('#speakers .cta').css({transform: 'translateY(-' + windowScroll/15 + 'px)'})
    }

  });

}); //eo:doc ready