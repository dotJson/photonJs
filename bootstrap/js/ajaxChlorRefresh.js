  $(document).ready(function() {
    $(".col-xs-4").load("/chlorDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/chlorDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
