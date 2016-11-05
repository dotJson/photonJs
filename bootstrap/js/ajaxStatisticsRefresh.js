  $(document).ready(function() {
    $(".col-xs-4").load("/statisticsDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/statisticsDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
