  $(document).ready(function() {
    $(".col-xs-4").load("/debugDiv");
    var refreshId = setInterval(function() {
      $(".col-xs-4").load('/debugDiv?randval='+ Math.random());
    }, 10000);
    $.ajaxSetup({ cache: false 
    });
  });
