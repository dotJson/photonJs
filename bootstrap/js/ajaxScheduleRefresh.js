  $(document).ready(function() {
    $(".col-xs-4").load("/scheduleDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/scheduleDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
