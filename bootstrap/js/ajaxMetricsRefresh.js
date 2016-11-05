  $(document).ready(function() {
    $(".col-xs-4").load("/metricsDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/metricsDiv?randval='+ Math.random());
    }, 5000);
    $.ajaxSetup({ cache: false 
    });
  });
