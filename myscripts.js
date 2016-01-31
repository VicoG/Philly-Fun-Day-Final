
		// Pop Up Script 
$(function() {
  //----- OPEN
  $('[data-popup-open]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

      e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

      e.preventDefault();
  });
});

function calculateRoute(from, waypt1, waypt2, waypt3, to) {
// Center initialized to Philla
var myOptions = {
  zoom: 12,
  center: {lat: 39.952, lng: -75.163},
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
// Draw the map
var mapObject = new google.maps.Map(document.getElementById("map"), myOptions);
var mapObject1 = new google.maps.Map(document.getElementById("map1"), myOptions);
var mapObject2 = new google.maps.Map(document.getElementById("map2"), myOptions);
var mapObject3 = new google.maps.Map(document.getElementById("map3"), myOptions);

var directionsService = new google.maps.DirectionsService();
var directionsRequest = {
  origin: from,
  destination: waypt1,
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC
};
 var directionsRequest1 = {
  origin: waypt1,
  destination: waypt2,
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC
}; 
var directionsRequest2 = {
  origin: waypt2,
  destination: waypt3,
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC
}; 
var directionsRequest3 = {
  origin: waypt3,
  destination: to,
  travelMode: google.maps.DirectionsTravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.METRIC
};
directionsService.route(
  directionsRequest,
  function(response, status)
  {
    if (status == google.maps.DirectionsStatus.OK)
    {
      new google.maps.DirectionsRenderer({
        map: mapObject,
        directions: response
      });
    }
    else
      $("#error").append("Unable to retrieve your route<br />");
  }
);

directionsService.route(
  directionsRequest1,
  function(response, status)
  {
    if (status == google.maps.DirectionsStatus.OK)
    {
      new google.maps.DirectionsRenderer({
        map: mapObject1,
        directions: response
      });
    }
    else
      $("#error").append("Unable to retrieve your route<br />");
  }
);
directionsService.route(
  directionsRequest2,
  function(response, status)
  {
    if (status == google.maps.DirectionsStatus.OK)
    {
      new google.maps.DirectionsRenderer({
        map: mapObject2,
        directions: response
      });
    }
    else
      $("#error").append("Unable to retrieve your route<br />");
  }
);
directionsService.route(
  directionsRequest3,
  function(response, status)
  {
    if (status == google.maps.DirectionsStatus.OK)
    {
      new google.maps.DirectionsRenderer({
        map: mapObject3,
        directions: response
      });
    }
    else
      $("#error").append("Unable to retrieve your route<br />");
  }
);
}

$(document).ready(function() {
// If the browser supports the Geolocation API
if (typeof navigator.geolocation == "undefined") {
  $("#error").text("Your browser doesn't support the Geolocation API");
  return;
}

$("#calculate-route").submit(function(event) {
  event.preventDefault();
  calculateRoute($("input[name='from[0]']:checked").val(), 
                 $("input[name='from[1]']:checked").val(),
                 $("input[name='from[2]']:checked").val(),
                 $("input[name='from[3]']:checked").val(),
                 $("input[name='from[4]']:checked").val());
});

$( "#row1" ).click(function() {
  $( ".row1").slideToggle( "slow" );
  return false;
});

$( "#row2" ).click(function() {
  $( ".row2").slideToggle( "slow" );
  return false;
});

$( "#row3" ).click(function() {
  $( ".row3").slideToggle( "slow" );
  return false;
});

$( "#row4" ).click(function() {
  $( ".row4").slideToggle( "slow" );
  return false;
});

$( "#row5" ).click(function() {
  $( ".row5").slideToggle( "slow" );
  return false;
});
});

