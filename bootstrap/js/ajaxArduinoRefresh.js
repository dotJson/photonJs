  $(document).ready(function() {
    $(".col-xs-4").load("/arduinoDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/arduinoDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
