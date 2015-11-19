//= require "jquery"

$( document ).ready(function() {

  var menuButton = $('a.menu'),
      mainNav = $('.main-nav'),
      body = $('body');

  

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



  $('a').click(function(){
    if (this.getAttribute("href").charAt(0) == "#") {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
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

    // var image = '/images/marker.png';

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
