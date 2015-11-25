//= require "jquery"

var menuButton = $('a.menu'),
    mainNav = $('.main-nav'),
    body = $('body'),
    scrollHeight,
    tickets = $('#tickets'),
    ticketsDist;

$( document ).ready(function() {

  // Menu Click
  menuButton.click(function(e) {
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

}); //eo:doc ready



$(window).scroll(function () { 
  
  scrollHeight = 200;
  if( $(window).scrollTop() > scrollHeight ) {
    $("body").addClass("scroll");
  } else {
    $("body").removeClass("scroll");
  }

  scrollHeight = 250;
  if( $(window).scrollTop() > scrollHeight ) {
    $("body").addClass("scroll-two");
  } else {
    $("body").removeClass("scroll-two");
  }


  if ($(window).width() > 768 ) {
    $('.speaker-list li').css("transform", "translateY(-" + ($(window).scrollTop()/5) + "px");
    $('.block.speakers .cta').css("transform", "translateY(-" + ($(window).scrollTop()/20) + "px");
  }


});

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