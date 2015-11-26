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
      $('.speaker-list').css("transform", "translate3d(0, -" + (windowScroll/5) + "px, 0");
      $('#speakers .cta').css("transform", "translate3d(0, -" + (windowScroll/15) + "px, 0");
    }

  });

}); //eo:doc ready


// Google Maps
function initMap() {

  var venue = {lat: 51.386205, lng: -2.362845};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: venue,
    scrollwheel: false,
    mapTypeControl: false,
    streetViewControl: false,
  });

  var image = {
    url: '/images/marker.png',
    size: new google.maps.Size(66, 45),
    scaledSize: new google.maps.Size(66, 45),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(33, 45)
  };

  var marker = new google.maps.Marker({
    position: venue,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: image
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(venue);
  });
}