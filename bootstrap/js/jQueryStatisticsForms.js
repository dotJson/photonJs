$(document).ready(function() { 
      // bind 'myForm' and provide a simple callback function 
      $('#pumpForm').ajaxForm(function() { 
      	alert('The pumpForm was submitted successfully');
      });
      $('#cleanerForm').ajaxForm(function() { 
      	alert('The cleanerForm was submitted successfully');
      });
      $('#waterfallForm').ajaxForm(function() { 
      	alert('The waterfallForm was submitted successfully');
      });
      $('#lightForm').ajaxForm(function() { 
      	//alert('The lightForm was submitted successfully');
      });
}); 