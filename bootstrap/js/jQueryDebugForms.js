$(document).ready(function() { 
      // bind 'myForm' and provide a simple callback function 
      $('#debugOff').ajaxForm(function() { 
      	alert('The debugOff was submitted successfully');
      });
      $('#debugOne').ajaxForm(function() { 
      	alert('The debugOne was submitted successfully');
      });
      $('#debugTwo').ajaxForm(function() { 
      	alert('The debugTwo was submitted successfully');
      });
}); 