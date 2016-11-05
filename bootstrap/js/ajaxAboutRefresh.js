  $(document).ready(function() {
    $(".col-xs-4").load("/aboutDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/aboutDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
